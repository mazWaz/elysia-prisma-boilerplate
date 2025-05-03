import { number } from 'joi';
import { Context } from 'elysia';
import { UserCarService } from './usercar.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import { prismaSearch, SearchOptions } from '../../config/prisma';
import { UsersService } from '../user/user.service';
import exclude from '../../utils/exclude';

export class UserCarController {
    private userCarSvc = new UserCarService();

    constructor() {
        this.userCarSvc = new UserCarService();
    }

    getAllUserCar = catchAsync(async ({ set,query }: any) => {
        const { page, limit, sortBy, sortOrder, searchField, search } = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder }
        };

        const usercar = await prismaSearch('userCars', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if(!usercar) {
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch Usercar' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return usercar;
    });

    getUsercarById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;

        const usercar = await this.userCarSvc.getUsercarById(id); 
        const data = exclude(usercar, ['createdAt', 'updatedAt'] as (keyof typeof usercar)[]);

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createUsercar = catchAsync(async ({ set, body }: any) => {
        const { carId, userId } = body;

        const data = await this.userCarSvc.createUsercar(
            carId,
            userId
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toISOString(),
            },

            message: 'Usercar data has been inserted',
        };
    });

    updateUsercar = catchAsync(async ({ set, body, params }: any) => {
        const { id } = params;
        const { carId, userId } = body;

        const data = await this.userCarSvc.updateUsercar(
            id,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data,
            message: 'UserCar data has been updated'
        };
    })

    deleteUsercar = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        
        const data = await this.userCarSvc.deleteUsercarById(id)

        set.status = HttpStatusEnum.HTTP_200_OK
        return {
            message: 'Car data has been deleted'
        }
    });
}
