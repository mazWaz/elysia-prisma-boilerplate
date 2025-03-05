import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Category, Departments, Prisma} from '@prisma/client';

export class DepartmentService { 
    private static instance: DepartmentService;

    public static getInstance(): DepartmentService {
        if(!DepartmentService.instance) {
            DepartmentService.instance = new DepartmentService();
        }

        return DepartmentService.instance;
    }

    async getDepartmentById<Key extends keyof Departments>(
        id: string,
        keys: Key[] = [
            'id',
            'name',
            'address',
            'category',
            'region_id',
            'country',
            'province',
            'district',
            'subDistrict'
        ] as Key []
    ): Promise<Pick<Departments, Key> | null> {
        try {
            const department = await db.departments.findUnique({
                where: { id },
                select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {}),
            }) as Pick<Departments, Key> | null;
            
            if (!department) {
                throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Department data not found');
            }

            return department;
        }   catch (error) {
            console.error('Update Department Error:', error); // Log the full error
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }

    async createDepartment(name: string, address: string, category: Category, region_id: number, country: string, province: string, district: string, subDistrict: string) {
        const createdDepartment = await db.departments.create({
            data: { name, address, category, region_id, country, province, district, subDistrict },
        });

        return createdDepartment;
    }

    async updateDepartment<Key extends keyof Departments>(
        departmentId: string,
        updateBody: Prisma.DepartmentsUpdateInput,
        keys: Key[] = [
            'id',
            'name',
            'address',
            'category',
            'region_id',
            'country',
            'province',
            'district',
            'subDistrict'
        ] as Key []
    ): Promise<Pick<Departments, Key> | null> {
        const department = await this.getDepartmentById(departmentId, ['id']);

        if (!department){
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Department not found');
        }

        const updatedDepartment = await db.departments.update({
            where: { id: department.id },
            data: updateBody,
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true}), {})
        });

        return updatedDepartment as Pick<Departments, Key> | null;
    }

    async deleteDepartmentById(departmentId: string): Promise<Departments> {
        const department = await db.departments.findUnique({
            where: { id: departmentId },
        });

        if (!department) {
            throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Department not found');
        }

        await db.departments.delete({
            where: { id: department.id },
        });

        return department;
    }
}