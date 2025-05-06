import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { UserAddress, Prisma, Users } from '@prisma/client';

export class AddressService {
    private static instance: AddressService;

    public static getInstance(): AddressService {
        if(!AddressService.instance) {
            AddressService.instance = new AddressService();
        }

        return AddressService.instance;
    }

    async getAddressById<Key extends keyof UserAddress>(
        id: string, 
        keys: Key[] = [
            'id',
            'address',
            'rt',
            'rw',
            'district',
            'city',
            'province',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserAddress, Key> | null> {
        try {
            const address = await db.userAddress.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<UserAddress, Key> | null;

            if(!address) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Address data not found');
            }

            return address;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal server error');
        }
    }

    async createAddress(address: string, rt: number, rw: number, district: string, city: string, province: string, userId: string){
        const createAddress = await db.userAddress.create({
            data: { address, rt, rw, district, city, province, userId },
        });

        return createAddress;
    }

    async updateAddress<Key extends keyof UserAddress>(
        addressId: string,
        updateAddress: Prisma.UserAddressUpdateInput,
        keys: Key[] = [
            'id',
            'address',
            'rt',
            'rw',
            'district',
            'city',
            'province',
            'userId',
            'createdAt',
            'updatedAt'
        ] as Key []
    ): Promise<Pick<UserAddress, Key> | null> {
        const address = await this.getAddressById(addressId, ['id', 'address', 'userId']);

        if(!address) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Address not found');
        }

        const updatedAddress = await db.userAddress.update({
            where: { id: addressId },
            data: updateAddress,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedAddress as Pick<UserAddress, Key> | null;
    }

    async deletaAddressById(addressId: string): Promise<UserAddress> {
        const address = await db.userAddress.findUnique({
            where: { id: addressId },
        });

        if (!address) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Address does not exist')
        }

        await db.userAddress.delete({
            where: { id: address.id },
        });

        return address;
    }

}