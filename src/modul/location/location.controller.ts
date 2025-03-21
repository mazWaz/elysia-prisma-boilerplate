import { Context } from 'elysia';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import ApiError from '../../utils/apiError';
import { Locations } from '@prisma/client';
import { prismaSearch } from '../../config/prisma';
import exclude from '../../utils/exclude';
import { LocationService } from './location.service';

export class LocationController {
    private locationSvc : LocationService;

    constructor() {
        this.locationSvc = new LocationService;
    }

    getAllLocation = catchAsync(async ({ set, query }: any) => {
        //const { detail } = query;
        const { page, limit, sortBy, sortOrder, searchField, search } = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
            search: { field: searchField ?? 'location', value: search }
            //include: { detail }
        };

        const location = await prismaSearch('locations', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if (!location) {
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch location' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return location;
    });

    getLocationById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        
        const location = await this.locationSvc.getLocationById(id);
        const data = exclude(location, ['createdAt', 'updatedAt'] as (keyof typeof location)[]);
        
        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createLocation = catchAsync(async ({ set, body }: any) => {
        const { location, user_carId } = body;

        const data = await this.locationSvc.createLocation(
            location,
            user_carId
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toISOString(),
            },

            message: 'Location has been inserted',
        };
    });

    updateLocation = catchAsync(async ({ set, body, params }: any) => {
        const { id } = params;
        const { location, user_carId } = body;
        
        const data = await this.locationSvc.updateLocation(
            id,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    deleteLocation = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        
        const data = await this.locationSvc.deleteLocationById(id)
        
        set.status = HttpStatusEnum.HTTP_200_OK
        return {
            message: 'Location has been deleted'
        }
    });
}