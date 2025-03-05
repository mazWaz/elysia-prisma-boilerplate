import Elysia, { t } from "elysia";
import { CarController } from "../../modul/car/car.controller";
import { 
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin,
    requireRoles
 } from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    CreateCar,
    CreateCarResponse,
    UpdateCar,
    UpdateCarResponse
} from '../../modul/car/car.validate';
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const carController = new CarController();

export const carRoute = new Elysia({
    prefix: '/car',
    detail: { description: 'Car endpoints', tags: ['7.Car']}
})
    .onBeforeHandle([checkAuth])

    .get('/', carController.getAllCar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get All Car', true)
    })

    .get('/getcar/:id', carController.getCarById, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get Car By ID')
    })

    .post('/create', carController.createCar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Create Car'),
        body: CreateCar,
        response: CreateCarResponse
    })

    .patch('/:id', carController.updateCar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update Car')
    })

    .delete('/:id', carController.deleteCar, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete Car')
    })    