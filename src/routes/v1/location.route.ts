import Elysia, { t } from "elysia";
import { LocationController } from "../../modul/location/location.controller";
import {
    auth,
    checkAuth,
    checkIsAdmin,
    checkIsStaff,
    checkIsSuperAdmin
} from "../../middelware/authCheck";
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import {
    createLocation,
    CreateLocationResponse,
    updateLocation,
    UpdateCarResponse
} from '../../modul/location/location.validate';
import { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const locationController = new LocationController();

export const locationRoute = new Elysia({
    prefix: '/location',
    detail: { description: 'Location endpoints', tags: ['6.Location']}
})
    .onBeforeHandle([checkAuth])

    .get('/', locationController.getAllLocation, {
        beforeHandle: auth(userRole.USER),
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get all location', true)
    })

    .post('/create', locationController.createLocation, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Add location'),
        body: createLocation,
        response: CreateLocationResponse
    })

    .get('/getlocation/:id', locationController.getLocationById, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Get location by ID')
    })

    .patch('/:id', locationController.updateLocation, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Update location')
    })

    .delete('/:id',locationController.deleteLocation, {
        beforeHandle: auth(userRole.USER),
        detail: swaggerDetails('Delete location')
    })