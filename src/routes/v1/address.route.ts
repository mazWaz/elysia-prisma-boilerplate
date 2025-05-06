import Elysia, { t } from "elysia";
import { AddressController } from "../../modul/address/address.controller";
import {
    checkAuth,
    requireRoles
} from '../../middelware/authCheck';
import {
    CreateAddress,
    CreateAddressResponse,
    UpdateAddress,
    UpdateAddressResponse
} from '../../modul/address/address.validate';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { CreateUser, userQueriesDTO } from "../../modul/user/user.validate";

const address = new AddressController();

export const userAddressRoute = new Elysia({
    prefix: '/address',
    detail: { description: 'Address endpoints', tags: ['6. Address']}
})
    .onBeforeHandle([checkAuth])

    .get('/', address.getAllAddress, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all address data', true)
    })

    .get('/:id', address.getAddressById, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get address by ID')
    })

    .post('/create', address.createAddress, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Create address'),
        body: CreateAddress,
        response: CreateAddressResponse
    })

    .patch('/:id', address.updateAddress, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update address'),
        body: UpdateAddress,
        response: UpdateAddressResponse
    })

    .delete('/:id', address.deleteAddress, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete address by ID')
    })