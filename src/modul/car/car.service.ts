import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Car, Prisma } from '@prisma/client';

export class CarsService {
    private static instance: CarsService;

    public static getInstance(): CarsService {
        if(!CarsService.instance) {
            CarsService.instance = new CarsService();
        }

        return CarsService.instance;
    }

    async getCarByid<Key extends keyof Car>(
        id: number,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Car, Key> | null> {
        try {
            const car = await db.car.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Car, Key> | null;

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

    async getCarByPlate<Key extends keyof Car>(
        plate_number: string,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Car, Key> | null> {
        try {
            const car = await db.car.findUnique({
                where: { plate_number },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Car, Key> | null;

            return car;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal server error');
        }
    }

    async createCar(name: string, brand: string, release_year: number, plate_number: string, status: string) {
        const samePlateNumber = await this.getCarByPlate(plate_number as string);

        if (samePlateNumber) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, `Plate number ${plate_number} already registered.`);
        }

        const createdCar = await db.car.create({
            data: { name, brand, release_year, plate_number, status },
        });

        return createdCar;
    }

    async updateCar<Key extends keyof Car>(
        carId: number,
        updateBody: Prisma.CarUpdateInput,
        keys: Key[] = [
            'id',
            'name',
            'brand',
            'release_year',
            'plate_number',
            'status',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Car, Key> | null> {
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

        const updatedCar = await db.car.update({
            where: { id: car.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedCar as Pick<Car, Key> | null;
    }

    async deleteCarById(carId: number): Promise<Car> {
        const car = await db.car.findUnique({
            where: { id: carId },
        });

        if (!car) {
            throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Car does not exist');
        }

        await db.car.delete({
            where: { id: car.id },
        });

        return car;
    }
}