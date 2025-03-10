import { Context } from 'elysia';
import { DepartmentService } from './department.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import ApiError from '../../utils/apiError';
import { Cars } from '@prisma/client';
import { prismaSearch } from '../../config/prisma';
import exclude from '../../utils/exclude';

export class DepartmentController {
    private departmentSvc : DepartmentService;

    constructor() {
        this.departmentSvc = new DepartmentService;
    }

    getAllDepartments = catchAsync(async ({ set, query }: any) => {
        //const { detail } = query;
        const { page, limit, sortBy, sortOrder, searchField, search } = query;
        const searchOptions = {
            page,
            limit,
            sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
            search: { field: searchField ?? 'name', value: search }
            //include: { detail }
        };

        const departments = await prismaSearch('departments', searchOptions);
        set.status = HttpStatusEnum.HTTP_200_OK;
        if (!departments) {
            set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
            return { message: 'Could not fetch Department' };
        }
        set.status = HttpStatusEnum.HTTP_200_OK;
        return departments;
    });

    getDepartmentById = catchAsync(async ({ set, params }: any) => {
        const { id } = params;

        const department = await this.departmentSvc.getDepartmentById(id);
        const data = exclude(department, ['createdAt', 'updatedAt'] as (keyof typeof department)[]);

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    });

    createDepartment = catchAsync(async ({ set, body }: any) => {
        const { name, address, category, province, district, subDistrict } = body;

        const data = await this.departmentSvc.createDepartment(
            name,
            address,
            category,
            province,
            district,
            subDistrict
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data: {
                ...data,
                createdAt: data.createdAt.toISOString(),
                updatedAt: data.updatedAt.toISOString(),
            },

            message: 'Car data has been inserted',
        };
    });

    updateDepartment = catchAsync(async ({ set, body, params }: any) => {
        const { id } = params;
        const { name, address, category, region_id, country, district, province, subDistrict } = body;

        const existingCar = await this.departmentSvc.getDepartmentById(id);

        if (!existingCar){
            set.status = HttpStatusEnum.HTTP_404_NOT_FOUND;
            return {
                message: `Deparment ID ${id} Not found.`
            };
        };

        const data = await this.departmentSvc.updateDepartment(
            id,
            body
        );

        set.status = HttpStatusEnum.HTTP_200_OK;
        return {
            data
        };
    })

    deleteDepartment = catchAsync(async ({ set, params }: any) => {
        const { id } = params;

        const data = await this.departmentSvc.deleteDepartmentById(id)

        set.status = HttpStatusEnum.HTTP_200_OK
        return {
            message: 'Department data has been deleted'
        }
    });
}