import { Context } from 'elysia';
import { RoleService } from './role.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import ApiError from '../../utils/apiError';
import { Roles } from '@prisma/client';
import { prismaSearch } from '../../config/prisma';
import exclude from '../../utils/exclude';

export class RoleController {
    private roleSvc : RoleService;

    constructor() {
        this.roleSvc = new RoleService;
    }

    getAllRoles = catchAsync(async ({ set, query }: any) => {
        //const { detail } = query;
        const { page, limit, sortBy, sortOrder, searchField, search} = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
            search: { field: searchField ?? 'name', value: search}
            //include: { detail }
        };

        const roles = await prismaSearch('roles', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if (!roles) {
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch Roles' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return roles;
    });

    getRoleById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        const roleId = parseInt(id, 10)

        const role = await this.roleSvc.getRoleById(roleId);
        const data = exclude(role, ['createdAt', 'updatedAt'] as (keyof typeof role)[]);

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createRole = catchAsync(async ({ set, body }: any) => {
        const { name, description } = body;

        const data = await this.roleSvc.createRole(
            name,
            description
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toISOString(),
            },

            message: 'Role data has been inserted',
        };
    });

    updateRole = catchAsync(async ({ set, body, params}: any) => {
        const { id } = params;
        const roleId = parseInt(id, 10)
        const { name, description } = body;
        
        const data = await this.roleSvc.updateRole(
            roleId,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    deleteRole = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        const roleId = parseInt(id, 10)

        if (isNaN(roleId)) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, "Invalid Role ID");
        }

        const data = await this.roleSvc.deleteRoleById(roleId)

        set.status = HttpStatusEnum.HTTP_200_OK
        return {
            message: 'Role data has been deleted.'
        }
    });
}