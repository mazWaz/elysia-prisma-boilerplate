import { t } from 'elysia';

export const CreateDepartment = t.Object({
    name: 
        t.String({
            example: 'POLRESTA MALANG'
        }),
    address: 
        t.String({
            example: 'Avenue Street Gg VI'
        }),
    category:
        t.String({
            example: 'POLDA'
        }),
    province: 
        t.String({
            example: 'Jawa Timur'
        }),
    district: 
        t.String({
            example: 'Malang'
        }),
    subDistrict: 
        t.String({
            example: 'Sukun'
        })
});

export const CreateDepartmentResponse = {
    200: t.Object({
        data: t.Object({
            id: t.String(),
            name: t.String(),
            address: t.String(),
            category: t.String(),
            province: t.String(),
            district: t.String(),
            subDistrict: t.String(),
            createdAt: t.String(),
            updatedAt: t.String(),
        }),
        message: t.String({ default: 'Department data has been inserted' })
    }),
    400: t.Object({ message: t.String({ default: 'Insert Department data failed'}) })
};

export const UpdateDeparment = t.Object({
    name: t.Optional(
        t.String({
            example: 'POLRESTA MALANG'
        })
    ),
    address: t.Optional(
        t.String({
            example: 'Avenue Street Gg IV'
        })
    ),
    category: t.Optional(
        t.String({
            example: 'POLRES'
        })
    ),
    province: t.Optional(
        t.String({
            example: 'Jawa Timur'
        })
    ),
    district: t.Optional(
        t.String({
            example: 'Malang'
        })
    ),
    subDistrict: t.Optional(
        t.String({
            example: 'Sukun'
        })
    )
});

export const UpdateDepartmentResponse = {
    200: t.Object({
        data: t.Any(),
        message: t.String({ default: 'Department data has been updated' })
    }),
    400: t.Object({ message: t.String({ default: 'Update data is failed'}) })
};