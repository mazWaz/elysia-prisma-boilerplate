import Elysia, { t } from "elysia";
import { LocationController } from "../../modul/location/location.controller";
import {
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin,
    requireRoles
} from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    createLocation,
    CreateLocationResponse,
    updateLocation,
    UpdateCarResponse
} from '../../modul/location/location.validate';
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const locationController = new LocationController();

export const locationRoute = new Elysia({
    prefix: '/location',
    detail: { description: 'Location endpoints', tags: ['9.Location']}
})
    .onBeforeHandle([checkAuth])

    .get('/', locationController.getAllLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all location', true)
    })

    .post('/create', locationController.createLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Add location'),
        body: createLocation,
        response: CreateLocationResponse
    })

    .get('/getlocation/:id', locationController.getLocationById, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get location by ID')
    })

    .patch('/:id', locationController.updateLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update location')
    })

    .delete('/:id',locationController.deleteLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete location')
    })