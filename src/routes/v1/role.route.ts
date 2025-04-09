import Elysia, { t } from "elysia";
import { RoleController } from "../../modul/role/role.controller";
import {
    checkAuth,
    requireRoles
} from "../../middelware/authCheck";
import {
    CreateRoles,
    CreateRolesResponse,
    UpdateRoles,
    UpdateRolesResponse
} from '../../modul/role/role.validate';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const roleController = new RoleController();

export const roleRoute = new Elysia({
    prefix: '/role',
    detail: { description: 'Role endpoints', tags: ['3.Role']}
})
    .onBeforeHandle([checkAuth])

    .get('/', roleController.getAllRoles, {
       beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get All Role', true)
    })

    .get('/getrole/:id', roleController.getRoleById, {
       beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get Role By Id')
    })

    .post('/create', roleController.createRole, {
       beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Create Role'),
        body: CreateRoles,
        response: CreateRolesResponse
    })

    .patch('/:id', roleController.updateRole, {
       beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update Role'),
        body: UpdateRoles,
        response: UpdateRolesResponse
    })

    .delete('/:id', roleController.deleteRole, {
       beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete Role')
    })