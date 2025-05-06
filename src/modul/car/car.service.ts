import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Cars, Prisma } from '@prisma/client';

export class CarsService {
    private static instance: CarsService;

    public static getInstance(): CarsService {
        if(!CarsService.instance) {
            CarsService.instance = new CarsService();
        }

        return CarsService.instance;
    }

    async getCarByid<Key extends keyof Cars>(
        id: string,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'departmentId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Cars, Key> | null> {
        try {
            const car = await db.cars.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Cars, Key> | null;

            if (!car) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Car data not found');
            }

            return car;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal server error');
        }
    }

    async getCarByPlate<Key extends keyof Cars>(
        plate_number: string,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'departmentId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Cars, Key> | null> {
        try {
            const car = await db.cars.findUnique({
                where: { plate_number },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Cars, Key> | null;

            return car;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal server error');
        }
    }

    async createCar(name: string, brand: string, release_year: number, plate_number: string, status: string, departmentId: string) {
        const samePlateNumber = await this.getCarByPlate(plate_number as string);

        if (samePlateNumber) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, `Plate number ${plate_number} already registered.`);
        }

        const createdCar = await db.cars.create({
            data: { name, brand, release_year, plate_number, status, departmentId },
        });

        return createdCar;
    }

    async updateCar<Key extends keyof Cars>(
        carId: string,
        updateBody: Prisma.CarsUpdateInput,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'departmentId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Cars, Key> | null> {
        const car = await this.getCarByid(carId, ['id', 'plate_number']);

        if (!car) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Car not found');
        }

        if (updateBody.plate_number && updateBody.plate_number !== car.plate_number) {
            const samePlateNumber = await this.getCarByPlate(updateBody.plate_number as string);

            if (samePlateNumber && samePlateNumber?.id !== carId) {
                throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, `Plate number ${updateBody.plate_number} ${samePlateNumber} ${carId} already registered.`);
            }
        }

        const updatedCar = await db.cars.update({
            where: { id: car.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedCar as Pick<Cars, Key> | null;
    }

    async deleteCarById(carId: string): Promise<Cars> {
        const car = await db.cars.findUnique({
            where: { id: carId },
        });

        if (!car) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Car does not exist');
        }

        await db.cars.delete({
            where: { id: car.id },
        });

        return car;
    }
}