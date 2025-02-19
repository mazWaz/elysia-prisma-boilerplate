import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Location, Prisma } from '@prisma/client';
import { extend } from 'joi';

export class LocationService {
    private static instance: LocationService;

    public static getInstance(): LocationService {
        if(!LocationService.instance) {
            LocationService.instance = new LocationService();
        }

        return LocationService.instance;
    }

    async getLocationById<Key extends keyof Location>(
        id: string,
        keys: Key[] = [
            'id',
            'location',
            'user_carId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Location, Key> | null> {
        try{
            const location = await db.location.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Location, Key> | null;
        
            if (!location) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Location data not found.');
            }

            return location;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal server error.');
        }
    }

    async createLocation(location: string, user_carId: string) {
        const createLocation = await db.location.create({
            data: { location, user_carId },
        });

        return createLocation;
    }

    async updateLocation<Key extends keyof Location>(
        id: string,
        updateBody: Prisma.LocationUpdateInput,
        keys: Key[] = [
            'id',
            'location',
            'user_carId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Location, Key> | null> {
        const location = await this.getLocationById(id)

        if (!location) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Location not found');
        }
        
        const updatedLocation = await db.location.update({
            where: { id: location.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedLocation as Pick<Location, Key> | null;
    }

    async deleteLocationById(locationId: string): Promise<Location> {
        const location = await db.location.findUnique({
            where: { id: locationId },
        });

        if (!location) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Location does not exist');
        }

        await db.location.delete({
            where: { id: location.id },
        });

        return location;
    }
}