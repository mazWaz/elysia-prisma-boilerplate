import { Context } from 'elysia';
import { CarsService } from './car.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import ApiError from '../../utils/apiError';
import { Car } from '@prisma/client';
import { prismaSearch } from '../../config/prisma';
import exclude from '../../utils/exclude';

export class CarController {
    private carSvc : CarsService;

    constructor() {
        this.carSvc = new CarsService;
    }

    testCar = catchAsync(async ({ set }: any) => {
        set.status = HttpStatusEnum.HTTP_200_OK;
        return { data: { status: 200}, message: `All System GO!` };
    });

    getAllCar = catchAsync(async ({ set, query }: any) => {
        //const { detail } = query;
        const { page, limit, sortBy, sortOrder, searchField, search } = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
            search: { field: searchField ?? 'name', value: search }
            //include: { detail }
        };

        const cars = await prismaSearch('car', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if (!cars) {
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch Cars' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return cars;
    });

    getCarById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;

        const carId = parseInt(id, 10);

        const car = await this.carSvc.getCarByid(carId);
        const data = exclude(car, ['createdAt', 'updatedAt'] as (keyof typeof car)[]);

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createCar = catchAsync(async ({ set, body }: any) => {
        const { name, brand, release_year, plate_number, status } = body;
        const car = await this.carSvc.getCarByPlate(plate_number);

        if (car){
            set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
            return {
                message: `Plate number ${plate_number} already registered.`
            };
        };

        const data = await this.carSvc.createCar(
            name,
            brand,
            release_year,
            plate_number,
            status
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toISOString(),
            },

            message: 'Car data has been inserted',
        };
    });

    updateCar = catchAsync(async ({ set, body, params }: any) => {
        const { id } = params;
        const { name, brand, release_year, plate_number, status } = body;
        const carId = parseInt(id, 10);

        const existingCar = await this.carSvc.getCarByPlate(plate_number);

        if (existingCar){
            set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
            return {
                message: `Plate number ${plate_number} already registered.`
            };
        };

        const data = await this.carSvc.updateCar(
            carId,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    })
}