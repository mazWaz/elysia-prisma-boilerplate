import { bearer } from '@elysiajs/bearer';
import config from '../config/config';
import { HttpStatusEnum } from '../utils/httpStatusCode';
import { Role } from '@prisma/client';
import { roleRights, userRole } from '../config/role';

export const checkAuth = async ({ bearer, elysia_jwt, error }: any) => {
  if (!bearer) {
    return error(401, 'Unauthorized. Access token not present');
  }

  const payload = await elysia_jwt.verify(bearer);

  if (!payload) {
    return error(401, 'Unauthorized. Access token not verified');
  }
};

export const checkEmailVerified = async ({ set, user, error }: any) => {
  if (!user) {
    return error(403, 'User session unavailable.');
  }

  if (!user.emailVerified) {
    return error(403, 'Your account is not email verified.');
  }
};

export const checkIsSuperAdmin = async ({ set, user, error }: any) => {
  const roles = user?.roles;

  if (!roles.some((role: any) => [Role.SUPERADMIN].includes(role))) {
    // set.status = HttpStatusEnum.HTTP_403_FORBIDDEN;
    return error(403, 'Access denied. Insufficient privileges');
  }
};

export const checkIsAdmin = async ({ set, user, error }: any) => {
  const roles = user?.roles;
  if (!roles.some((role: any) => [Role.ADMIN].includes(role))) {
    // set.status = HttpStatusEnum.HTTP_403_FORBIDDEN;
    return error(403, 'Access denied. Insufficient privileges');
  }
};

export const checkIsStaff = async ({ set, user, error }: any) => {
  const roles = user?.roles;

  if (!roles.some((role: any) => [Role.SUPERVISOR, Role.SUPPORT].includes(role))) {
    // set.status = HttpStatusEnum.HTTP_403_FORBIDDEN;
    return error(403, 'Access denied. Insufficient privileges');
  }
};
export const checkIsUser = async ({ set, user, error }: any) => {
  const roles = user?.roles;

  if (!roles.some((role: any) => [Role.USER].includes(role))) {
    return error(403, 'Access denied. Insufficient privileges');
  }
};

export const auth =
  (...requiredRights: userRole[]) =>
  async ({ user, error }: any) => {
    if (requiredRights.length) {
      const userRights = roleRights.get(user.roles) ?? [];
      const hasRequiredRights = requiredRights.every((requiredRight) =>
        userRights.includes(requiredRight)
      );

      if (!hasRequiredRights) {
        return error(403, 'Access denied. Insufficient privileges');
      }
    }
  };
