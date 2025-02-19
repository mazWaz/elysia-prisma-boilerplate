import { Context } from 'elysia';
import { AddressService } from './address.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import ApiError from '../../utils/apiError';
import { UserAddress } from '@prisma/client';
import { prismaSearch } from '../../config/prisma';
import exclude from '../../utils/exclude';

export class AddressController {
    private addressSvc : AddressService;

    constructor() {
        this.addressSvc = new AddressService;
    }

    getAllAddress = catchAsync(async ({ set, query }: any) => {
        //const { detail } = query;
        const { page, limit, sortBy, sortOrder, searchField, search } = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
            search: { field: searchField ?? 'address', value: search }
            //include: { detail }
        };

        const address = await prismaSearch('userAddress', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if(!address) { 
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch address' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return address;
    });

    getAddressById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;
        
        const address = await this.addressSvc.getAddressById(id);
        const data = exclude(address, ['createdAt', 'updatedAt'] as (keyof typeof address)[]);

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createAddress = catchAsync(async ({ set, body }: any) => {
        const { address, rt, rw, district, city, province, userId } = body;

        const data = await this.addressSvc.createAddress(
            address,
            rt,
            rw,
            district,
            city,
            province,
            userId
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toDateString(),
            },

            message: 'Address data has been inserted',
        };
    });

    updateAddress = catchAsync(async ({ set, body, params }: any) =>{
        const { id } = params;
        const { address, rt, rw, district, city, province} = body;

        const data = await this.addressSvc.updateAddress(
            id,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return{
            data
        };
    })

    deleteAddress = catchAsync(async ({ set, params }: any) => {
        const { id } = params;

        const dataExist = await this.addressSvc.getAddressById(id);
    
        if (!dataExist) {
          set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
    
          return {
            message: 'Address does not exist'
          }
        };
    
        const data = await this.addressSvc.deletaAddressById(
          id
        )
    
        set.status = HttpStatusEnum.HTTP_200_OK
        return {
          message: 'Address has been deleted'
        }
    });
}