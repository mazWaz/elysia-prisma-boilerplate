//authCheck.ts
import { bearer } from '@elysiajs/bearer';
import config from '../config/config';
import { HttpStatusEnum } from '../utils/httpStatusCode';
import { Prisma, PrismaClient, Roles } from '@prisma/client';
import { UserRole, userRole } from '../config/role';
import { db } from '../config/prisma';

/**
 * Middleware to check user authentication based on JWT token.
 * It verifies the token from the Bearer header and attaches the user payload to the request context.
 *
 * @param {any} context - Elysia context object containing bearer token, jwt verifier, error handler, and request object.
 * @returns {Promise<void | Elysia.ErrorHandler>} - Resolves if authentication is successful, otherwise returns an error handler.
 */
export const checkAuth = async ({ bearer: token, elysia_jwt, error, request }: any) => {
  if (!token) {
    return error(
      HttpStatusEnum.HTTP_401_UNAUTHORIZED,
      'Unauthorized: Access token is missing.'
    );
  }

  try {
    const payload = await elysia_jwt.verify(token);

    if (!payload) {
      return error(
        HttpStatusEnum.HTTP_401_UNAUTHORIZED,
        'Unauthorized: Access token verification failed.'
      );
    }

    const { sub, name, deptId, roleId } = payload.payload;

    request.userAuth = {
      sub,
      name,
      deptId,
      roleId,
    };
  } catch (err) {
    // Log the error for debugging purposes in development/staging
    // console.error("JWT Verification Error:", err);
    return error(
      HttpStatusEnum.HTTP_401_UNAUTHORIZED,
      'Unauthorized: Invalid access token.'
    );
  }
};

/**
 * Middleware to check if the user's email is verified.
 * Assumes that `checkAuth` middleware has already run and `request.userAuth` is populated.
 *
 * @param {any} context - Elysia context object containing the user object in the request.
 * @returns {Promise<void | Elysia.ErrorHandler>} - Resolves if email is verified, otherwise returns an error handler.
 */
export const checkEmailVerified = async ({ request, error }: any) => {
  const userAuth = request.userAuth;

  if (!userAuth) {
    return error(
      HttpStatusEnum.HTTP_403_FORBIDDEN,
      'Forbidden: User authentication context is missing. Ensure `checkAuth` middleware is used.'
    );
  }

  const user = await db.users.findUnique({
    where: { id: userAuth.sub },
    select: { isEmailVerified: true },
  });

  if (!user || !user.isEmailVerified) {
    return error(
      HttpStatusEnum.HTTP_403_FORBIDDEN,
      'Forbidden: Your account is not email verified.'
    );
  }
};

/**
 * Middleware to enforce role-based authorization.
 * Checks if the user's role is among the allowed roles.
 * Assumes that `checkAuth` middleware has already run and `request.userAuth` is populated.
 *
 * @param {...UserRole[]} requiredRoleNames - Array of roles allowed to access the endpoint.
 * @returns {Elysia.Handler} - Middleware handler function.
 */
export const requireRoles =
  (...requiredRoleNames: UserRole[]) =>
  async ({ request, error }: any) => {
    const userAuth = request.userAuth;

    if (!userAuth) {
      return error(
        HttpStatusEnum.HTTP_401_UNAUTHORIZED,
        'Unauthorized: User authentication context is missing. Ensure `checkAuth` middleware is used.'
      );
    }

    const requiredRoleIds = requiredRoleNames.map((role) => userRole[role]);

    if (!requiredRoleIds.includes(userAuth.roleId)) {
      return error(
        HttpStatusEnum.HTTP_403_FORBIDDEN,
        `Forbidden: Insufficient role. Required roles: ${requiredRoleNames.join(', ')}.`
      );
    }
  };

// Define category hierarchy for department access control
const categoryHierarchy = {
  POLRI: 4,
  POLDA: 3,
  POLRES: 2,
  POLSEK: 1,
};

/**
 * Higher-order function to create a resolver for department access control.
 * It fetches the department ID associated with a specific entity (e.g., Car) based on the entity ID in the request parameters.
 *
 * @param {Prisma.ModelName} model - Prisma model name (e.g., 'Cars').
 * @param {string} paramName - Parameter name in the route path that corresponds to the entity ID (e.g., 'id').
 * @returns {(context: any) => Promise<{ targetDeptId: string | null; entity: any } | null>} - Resolver function.
 */
export const createDepartmentResolver = (
  model: Prisma.ModelName,
  paramName: string
) => {
  return async (context: any) => {
    const { params, error } = context;
    const entityId = params[paramName];

    if (!entityId) {
      error(
        HttpStatusEnum.HTTP_400_BAD_REQUEST,
        'Bad Request: Entity ID is missing in parameters.'
      );
      return null;
    }

    try {
      const entity = await ((db as any)[model]).findUnique({
        where: { id: entityId },
        select: { departmentId: true },
      });

      if (!entity) {
        error(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Not Found: Entity not found.');
        return null;
      }

      return {
        targetDeptId: entity.departmentId,
        entity,
      };
    } catch (dbError) {
      // Log the error for debugging purposes
      console.error('Database Error in createDepartmentResolver:', dbError);
      error(
        HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR,
        'Internal Server Error: Failed to retrieve entity department information.'
      );
      return null;
    }
  };
};

/**
 * Middleware to check if the user is assigned to the same department as specified in the request body.
 * Used for create operations where department assignment is being set.
 *
 * @param {any} context - Elysia context object.
 * @returns {Promise<void | Elysia.ErrorHandler | undefined>} - Resolves if access is allowed, otherwise returns an error handler or undefined.
 */
export const checkDepartmentAssignment = async (context: any) => {
  const { request, error, body } = context;
  const userDeptId = request.userAuth?.deptId;
  const targetDeptId = body.departmentId; // Assuming departmentId is in the body

  if (!targetDeptId) return; // If no targetDeptId in body, skip check (maybe it's not relevant for this operation)

  if (targetDeptId === userDeptId) return; // Allow if user and target department are the same

  return performDepartmentHierarchyCheck(context, userDeptId, targetDeptId); // Delegate to hierarchy check if different
};

/**
 * Higher-order middleware to check department-based access control.
 * Uses a resolver function to dynamically get the target department ID based on the request context.
 *
 * @param {(context: any) => Promise<{ targetDeptId: string | null; entity: any } | null>} getEntityAndDeptId - Resolver function to get target department ID and entity.
 * @returns {(context: any) => Promise<void | Elysia.ErrorHandler | undefined>} - Middleware handler function.
 */
export const checkDepartmentAccess =
  (
    getEntityAndDeptId: (
      context: any
    ) => Promise<{ targetDeptId: string | null; entity: any } | null>
  ) =>
  async (context: any) => {
    const { request, error } = context;

    const userDeptId = request.userAuth.deptId;
    if (!userDeptId) {
      return error(
        HttpStatusEnum.HTTP_403_FORBIDDEN,
        'Forbidden: User department information is missing in authentication context.'
      );
    }

    const entityDeptData = await getEntityAndDeptId(context);

    if (!entityDeptData) {
      return; //getEntityAndDeptId already handles errors, just return
    }

    const { targetDeptId, entity } = entityDeptData;

    if (!targetDeptId) {
      return error(
        HttpStatusEnum.HTTP_400_BAD_REQUEST,
        'Bad Request: Department ID is missing for target entity.'
      );
    }

    return performDepartmentHierarchyCheck(context, userDeptId, targetDeptId);
  };


/**
 * Internal function to perform department hierarchy check.
 * Compares user's department with target department based on category and regional jurisdiction.
 *
 * @param {any} context - Elysia context object.
 * @param {string} userDeptId - User's department ID.
 * @param {string} targetDeptId - Target department ID.
 * @returns {Promise<void | Elysia.ErrorHandler | undefined>} - Resolves if access is allowed, otherwise returns an error handler or undefined.
 */
async function performDepartmentHierarchyCheck(
  context: any,
  userDeptId: string,
  targetDeptId: string
) {
  const { error } = context;

  if (targetDeptId === userDeptId) return; // Already checked outside, but for safety

  try {
    const [userDept, targetDept] = await Promise.all([
      db.departments.findUnique({
        where: { id: userDeptId },
        select: { category: true, province: true, district: true, subDistrict: true },
      }),
      db.departments.findUnique({
        where: { id: targetDeptId },
        select: { category: true, province: true, district: true, subDistrict: true },
      }),
    ]);

    if (!userDept)
      return error(
        HttpStatusEnum.HTTP_403_FORBIDDEN,
        'Forbidden: User department is invalid.'
      );
    if (!targetDept)
      return error(
        HttpStatusEnum.HTTP_404_NOT_FOUND,
        'Not Found: Target department not found.'
      );

    const userRank = categoryHierarchy[userDept.category];
    const targetRank = categoryHierarchy[targetDept.category];

    if (userRank < targetRank) {
      return error(
        HttpStatusEnum.HTTP_403_FORBIDDEN,
        `Forbidden: ${userDept.category} level users cannot modify ${targetDept.category} level data.`
      );
    }

    if (userRank === targetRank) {
      let hasAccess = false;

      switch (userDept.category) {
        case 'POLRI':
          hasAccess = true;
          break;

        case 'POLDA':
          hasAccess = userDept.province === targetDept.province;
          break;

        case 'POLRES':
          hasAccess =
            userDept.province === targetDept.province &&
            userDept.district === targetDept.district;
          break;

        case 'POLSEK':
          hasAccess =
            userDept.province === targetDept.province &&
            userDept.district === targetDept.district &&
            userDept.subDistrict === targetDept.subDistrict;
          break;
      }

      if (!hasAccess) {
        return error(
          HttpStatusEnum.HTTP_403_FORBIDDEN,
          `Forbidden: Regional jurisdiction mismatch for ${userDept.category} level access.`
        );
      }
    }
    return; // Access granted
  } catch (dbError) {
    // Log the error for debugging purposes
    console.error('Database Error in performDepartmentHierarchyCheck:', dbError);
    return error(
      HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR,
      'Internal Server Error: Failed to perform department hierarchy check.'
    );
  }
}