import Elysia, { t } from "elysia";
import { CarController } from "../../modul/car/car.controller";
import { 
    checkAuth,
    checkDepartmentAccess,
    checkDepartmentAssignment,
    createDepartmentResolver,
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
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const carController = new CarController();

export const carRoute = new Elysia({
    prefix: '/car',
    detail: { description: 'Car endpoints', tags: ['7.Car']}
})
    .onBeforeHandle([checkAuth])

    .get('/', carController.getAllCar, {
        beforeHandle: [requireRoles('STAFF', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get All Car', true)
    })

    .get('/getcar/:id', carController.getCarById, {
        beforeHandle: [requireRoles('STAFF', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get Car By ID')
    })

    .post('/create', carController.createCar, {
        beforeHandle: [requireRoles('STAFF', 'ADMIN', 'SUPERADMIN'),
        checkDepartmentAssignment
        ],
        detail: swaggerDetails('Create Car'),
        body: CreateCar,
        response: CreateCarResponse
    })

    .patch('/:id', carController.updateCar, {
        beforeHandle: [requireRoles('ADMIN', 'SUPERADMIN'),
            checkDepartmentAccess(createDepartmentResolver('Cars', 'id'))],
        detail: swaggerDetails('Update Car')
    })

    .delete('/:id', carController.deleteCar, {
        beforeHandle: [requireRoles('ADMIN', 'SUPERADMIN'),
            checkDepartmentAccess(createDepartmentResolver('Cars', 'id'))],
        detail: swaggerDetails('Delete Car')
    })    