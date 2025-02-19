import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { db } from '../../config/prisma';
import { Car, Prisma, Role, User, UserCar } from '@prisma/client';
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

    async getAll<Key extends keyof UserCar>(
        id: string,
        keys: Key[] = ['id', 'userId', 'carId'] as Key[]
    ): Promise<Pick<UserCar, Key>[]> {
        return db.userCar.findMany({
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        }) as Promise<Pick<UserCar, Key>[]>;
    }

    async getUsercarById<Key extends keyof UserCar>(
        id: string,
        keys: Key[] = [
            'id',
            'carId',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserCar, Key> | null> {
        try {
            const usercar = await db.userCar.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<UserCar, Key> | null;

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

    async createUsercar(carId: number, userId: string) {
        const sameCar = await db.userCar.findUnique({
            where: { carId: carId },
        });

        if (sameCar) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Car or User already registered');
        }

        const sameUser = await db.userCar.findUnique({
            where: { userId: userId },
        });

        if (sameUser) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Car or User already registered');
        }

        const createUsercar = await db.userCar.create({
            data: { carId, userId},
        });

        return createUsercar;
    }

    async updateUsercar<Key extends keyof UserCar>(
        usercarId: string,
        updateBody: Prisma.UserCarUpdateInput,
        keys: Key[] = [
            'carId',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserCar, Key> | null> {
        const usercar = await this.getUsercarById(usercarId, ['carId', 'userId']);

        if (!usercar) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Data ID not found')
        }

        const updateUsercar = await db.userCar.update({
            where: { id: usercarId },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updateUsercar as Pick<UserCar, Key> | null;
    }

    async deleteUsercarById(usercarId: string): Promise<UserCar> {
        const usercar = await db.userCar.findUnique({
            where: { id: usercarId },
        });

        if (!usercar) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Usercar does not exist');
        }

        await db.userCar.delete({
            where: { id: usercarId },
        });

        return usercar;
    }
}