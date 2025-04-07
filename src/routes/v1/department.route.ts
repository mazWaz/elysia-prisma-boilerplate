import Elysia, { t } from "elysia";
import { DepartmentController } from "../../modul/department/department.controller";
import {
    checkAuth,
    requireRoles
} from "../../middelware/authCheck";
import {
    CreateDepartment,
    CreateDepartmentResponse,
    UpdateDeparment,
    UpdateDepartmentResponse
} from '../../modul/department/department.validate';
import { HttpStatusEnum } from "../../utils/httpStatusCode";
import { swaggerDetails } from "../../utils/responseHelper";
import type { userRole } from "../../config/role";
import { paginationOptions } from "../../config/prisma";
import { userQueriesDTO } from "../../modul/user/user.validate";

const departmentContoller = new DepartmentController();

export const departmentRoute = new Elysia({
    prefix: '/department',
    detail: { description: 'Department endpoints', tags: ['4.Department']}
})
    //.onBeforeHandle([checkAuth])

    .get('/', departmentContoller.getAllDepartments, {
        //beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')], // example using role based check, assuming getUserById is accessible to USER role
        query: t.Object({
            ...paginationOptions,
            ...userQueriesDTO
        }),
        detail: swaggerDetails('Get All Departments', true)
    })

    .get('/getdepartment/:id', departmentContoller.getDepartmentById, {
       // beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')], // example using role based check, assuming getUserById is accessible to USER role
        detail: swaggerDetails('Get Department By ID')
    })

    .post('/create', departmentContoller.createDepartment, {
       // beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')], // example using role based check, assuming getUserById is accessible to USER role
        detail: swaggerDetails('Create Department'),
        body: CreateDepartment,
        response: CreateDepartmentResponse
    })

    .patch('/:id', departmentContoller.updateDepartment, {
       // beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')], // example using role based check, assuming getUserById is accessible to USER role
        detail: swaggerDetails('Update Department'),
        body: UpdateDeparment
    })

    .delete('/:id', departmentContoller.deleteDepartment, {
       // beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')], // example using role based check, assuming getUserById is accessible to USER role
        detail: swaggerDetails('Delete Department')
    })