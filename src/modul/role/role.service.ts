import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Roles, Prisma } from '@prisma/client';

export class RoleService {
    private static instance: RoleService;

    public static getInstance(): RoleService {
        if(!RoleService.instance) {
            RoleService.instance = new RoleService();
        }

        return RoleService.instance;
    }

    async getRoleById<Key extends keyof Roles>(
        id: number,
        keys: Key[] = [
            'id',
            'name',
            'description',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Roles, Key> | null> {
        try {
            const role = await db.roles.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Roles, Key> | null;

            if (!role) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Role data not found');
            }

            return role;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }

    async createRole(name: string, description: string) {
        const createdRole = await db.roles.create({
            data: { name, description }
        });

        return createdRole;
    }

    async updateRole<Key extends keyof Roles>(
        roleId: number,
        updateBody: Prisma.RolesUpdateInput,
        keys: Key[] = [
            'id',
            'name',
            'description'
        ] as Key []
    ): Promise<Pick<Roles, Key> | null> {
        const role = await this.getRoleById(roleId, ['id']);

        if (!role){
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Role not found')
        }

        const updatedRole = await db.roles.update({
            where: { id: role.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });
        
        return updatedRole as Pick<Roles, Key> | null;
    }

    async deleteRoleById(roleId: number): Promise<Roles> {
        const role = await db.roles.findUnique({
            where: { id: roleId },
        });

        if (!role) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Role not found');
        }

        await db.roles.delete({
            where: { id: role.id },
        });

        return role;
    }
}