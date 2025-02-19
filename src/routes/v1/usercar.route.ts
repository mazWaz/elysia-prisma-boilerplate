import Elysia, { t } from "elysia";
import { UserController } from "../../modul/user/user.controller";
import {
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin
} from '../../middelware/authCheck';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { CreateUser, userQueriesDTO } from "../../modul/user/user.validate";
import { UserCarController } from "../../modul/usercar/usercar.controller";

const usercar = new UserCarController();

export const usercarRoute = new Elysia({
    prefix: '/usercar',
    detail: { description: 'Usercar endpoints', tags: ['5.Usercar']}
})
    .onBeforeHandle([checkAuth])

    .get('/', usercar.getAllUserCar, {
        beforeHandle: auth(userRole.USER),
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all usercar data', true)
    })

    .get('/:id', usercar.getUsercarById, {
        detail: swaggerDetails('Get usercar by ID')
    })

    .post('/create', usercar.createUsercar, {
        detail: swaggerDetails('Create usercar')
    })

    .patch('/:id', usercar.updateUsercar, {
        detail: swaggerDetails('Update usercar')
    })

    .delete('/:id', usercar.deleteUsercar, {
        detail: swaggerDetails('Delete usercar by ID')
    })