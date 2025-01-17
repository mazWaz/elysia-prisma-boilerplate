import Elysia, { t } from "elysia";
import { CarController } from "../../modul/car/car.controller";
import { checkAuth } from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    CreateCar,
    CreateCarResponse,
    UpdateCar,
    UpdateCarResponse
} from '../../modul/car/car.validate';

const carController = new CarController();

export const carRoute = new Elysia({
    prefix: '/car',
    detail: { description: 'Car endpoints', tags: ['4.Car']}
})
    //.onBeforeHandle([checkAuth])

    .get('/', carController.getAllCar)

    .get('/getcar/:id', carController.getCarById, {
        detail: swaggerDetails('Get Car By ID')
    })

    .post('/create', carController.createCar, {
        detail: swaggerDetails('Create Car'),
        body: CreateCar,
        response: CreateCarResponse        
    })

    .patch('/update/:id', carController.updateCar)