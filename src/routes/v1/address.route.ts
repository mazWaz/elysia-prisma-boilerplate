import Elysia, { t } from "elysia";
import { AddressController } from "../../modul/address/address.controller";
import {
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin
} from '../../middelware/authCheck';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { CreateUser, userQueriesDTO } from "../../modul/user/user.validate";

const address = new AddressController();

export const userAddressRoute = new Elysia({
    prefix: '/address',
    detail: { description: 'Address endpoints', tags: ['6. Address']}
})
    .onBeforeHandle([checkAuth])

    .get('/', address.getAllAddress, {
        beforeHandle: auth(userRole.USER),
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all address data', true)
    })

    .get('/:id', address.getAddressById, {
        detail: swaggerDetails('Get address by ID')
    })

    .post('/create', address.createAddress, {
        detail: swaggerDetails('Create address')
    })

    .patch('/:id', address.updateAddress, {
        detail: swaggerDetails('Update address')
    })

    .delete('/:id', address.deleteAddress, {
        detail: swaggerDetails('Delete address by ID')
    })