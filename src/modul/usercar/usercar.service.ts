import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { db } from '../../config/prisma';
import { Cars, Prisma, Roles, Users, UserCars } from '@prisma/client';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { extend } from 'joi';

export class UserCarService{
    private static instance: UserCarService;

    public static getInstace(): UserCarService{
        if (!UserCarService.instance) {
            UserCarService.instance = new UserCarService();
        }

    return UserCarService.instance;
    }

    async getAll<Key extends keyof UserCars>(
        id: string,
        keys: Key[] = ['id', 'userId', 'carId'] as Key[]
    ): Promise<Pick<UserCars, Key>[]> {
        return db.userCars.findMany({
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        }) as Promise<Pick<UserCars, Key>[]>;
    }

    async getUsercarById<Key extends keyof UserCars>(
        id: string,
        keys: Key[] = [
            'id',
            'carId',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserCars, Key> | null> {
        try {
            const usercar = await db.userCars.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<UserCars, Key> | null;

            if (!usercar) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Usercar data not found');
            }

            return usercar;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }

    async createUsercar(carId: string, userId: string) {
        console.log(userId)
        const user = await db.users.findUnique({
            where: { id: userId }
        });
        if (!user) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, "User not found");
        }
    
        const car = await db.cars.findUnique({
            where: { id: carId }
        });
        if (!car) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Car not found');
        }
        
        const existingUserCar = await db.userCars.findFirst({
            where: {
                AND: [
                    { carId: carId },
                    { userId: userId }
                ]
            }
        });
        if (existingUserCar) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'User already has this car registered');
        }
    
        return await db.userCars.create({
            data: { carId, userId }
        });
    }

    async updateUsercar<Key extends keyof UserCars>(
        usercarId: string,
        updateBody: Prisma.UserCarsUpdateInput,
        keys: Key[] = [
            'carId',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserCars, Key> | null> {
        const existingUserCar = await this.getUsercarById(usercarId);
        
        if (!existingUserCar) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Usercar ID is not found');
        }

        
        const updateUsercar = await db.userCars.update({
            where: { id: usercarId },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updateUsercar as Pick<UserCars, Key> | null;
    }

    async deleteUsercarById(usercarId: string): Promise<UserCars> {
        
        const usercar = await db.userCars.findUnique({
            where: { id: usercarId },
        });

        if (!usercar) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Usercar does not exist');
        }

        await db.userCars.delete({
            where: { id: usercarId },
        });

        return usercar;
    }
}