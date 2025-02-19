import Elysia, { t } from "elysia";
import { CarController } from "../../modul/car/car.controller";
import { 
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin
 } from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    CreateCar,
    CreateCarResponse,
    UpdateCar,
    UpdateCarResponse
} from '../../modul/car/car.validate';
import { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const carController = new CarController();

export const carRoute = new Elysia({
    prefix: '/car',
    detail: { description: 'Car endpoints', tags: ['4.Car']}
})
    .onBeforeHandle([checkAuth])

    .get('/', carController.getAllCar, {
        beforeHandle: auth(userRole.USER),
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get All Car', true)
    })

    .get('/getcar/:id', carController.getCarById, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Get Car By ID')
    })

    .post('/create', carController.createCar, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Create Car'),
        body: CreateCar,
        response: CreateCarResponse
    })

    .patch('/:id', carController.updateCar, {
       beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Update Car')
    })

    .delete('/:id', carController.deleteCar, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Delete Car')
    })    