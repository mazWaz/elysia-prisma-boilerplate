import Elysia, { t } from "elysia";
import { UserController } from "../../modul/user/user.controller";
import {
    checkAuth,
    requireRoles
} from '../../middelware/authCheck';
import {
    CreateUser,
    CreateUserResponse,
    UpdateUser,
    UpdateUserResponse
} from '../../modul/user/user.validate';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";
import { UserCarController } from "../../modul/usercar/usercar.controller";

const usercar = new UserCarController();

export const usercarRoute = new Elysia({
    prefix: '/usercar',
    detail: { description: 'Usercar endpoints', tags: ['8.Usercar']}
})
    .onBeforeHandle([checkAuth])

    .get('/', usercar.getAllUserCar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all usercar data', true)
    })

    .get('/:id', usercar.getUsercarById, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get usercar by ID')
    })

    .post('/create', usercar.createUsercar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Create usercar')
    })

    .patch('/:id', usercar.updateUsercar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update usercar')
    })

    .delete('/:id', usercar.deleteUsercar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete usercar by ID')
    })