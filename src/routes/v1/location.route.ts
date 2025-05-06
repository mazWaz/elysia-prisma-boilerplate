import Elysia, { t } from "elysia";
import { LocationController } from "../../modul/location/location.controller";
import {
    checkAuth,
    requireRoles
} from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    createLocation,
    CreateLocationResponse,
    updateLocation,
    UpdateLocationResponse
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

    .get('/getlocation/:id', locationController.getLocationById, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Get location by ID')
    })

    .post('/create', locationController.createLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Add location'),
        body: createLocation,
        response: CreateLocationResponse
    })

    .patch('/:id', locationController.updateLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Update location'),
        body: updateLocation,
        response: UpdateLocationResponse
    })

    .delete('/:id',locationController.deleteLocation, {
        beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
        detail: swaggerDetails('Delete location')
    })