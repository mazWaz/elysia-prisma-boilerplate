import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Locations, Prisma } from '@prisma/client';
import { extend } from 'joi';

export class LocationService {
    private static instance: LocationService;

    public static getInstance(): LocationService {
        if(!LocationService.instance) {
            LocationService.instance = new LocationService();
        }

        return LocationService.instance;
    }

    async getLocationById<Key extends keyof Locations>(
        id: string,
        keys: Key[] = [
            'id',
            'location',
            'user_carId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Locations, Key> | null> {
        try{
            const location = await db.locations.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Locations, Key> | null;
        
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
        const createLocation = await db.locations.create({
            data: { location, user_carId },
        });

        return createLocation;
    }

    async updateLocation<Key extends keyof Locations>(
        id: string,
        updateBody: Prisma.LocationsUpdateInput,
        keys: Key[] = [
            'id',
            'location',
            'user_carId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<Locations, Key> | null> {
        const location = await this.getLocationById(id)

        if (!location) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Location not found');
        }
        
        const updatedLocation = await db.locations.update({
            where: { id: location.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedLocation as Pick<Locations, Key> | null;
    }

    async deleteLocationById(locationId: string): Promise<Locations> {
        const location = await db.locations.findUnique({
            where: { id: locationId },
        });

        if (!location) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Location does not exist');
        }

        await db.locations.delete({
            where: { id: location.id },
        });

        return location;
    }
}