import { t } from 'elysia';

export const CreateAddress = t.Object({
    address: 
        t.String({
            example: 'Avenue Street Gg VI'
        }),
    rt: 
        t.Number({
            example: '8'
        }),
    rw:
        t.Number({
            example: '2'
        }),
    district: 
        t.String({
            example: 'Sukun'
        }),
    city: 
        t.String({
            example: 'Malang'
        }),
    province: 
        t.String({
            example: 'Jawa Timur'
        })
});

export const CreateAddressResponse = {
    200: t.Object({
        data: t.Object({
            id: t.String(),
            address: t.String(),
            rt: t.Number(),
            rw: t.Number(),
            district: t.String(),
            city: t.String(),
            province: t.String(),
            createdAt: t.String(),
            updatedAt: t.String(),
        }),
        message: t.String({ default: 'Address data has been inserted' })
    }),
    400: t.Object({ message: t.String({ default: 'Insert Address data failed'}) })
};

export const UpdateAddress = t.Object({
    address: t.Optional(
        t.String({
            example: 'Avenue Street Gg VI'
        })
    ),
    rt: t.Optional(
        t.Number({
            example: '8'
        })
    ),
    rw: t.Optional(
        t.Number({
            example: '2'
        })
    ),
    district: t.Optional(
        t.String({
            example: 'Sukun'
        })
    ),
    city: t.Optional(
        t.String({
            example: 'Malang'
        })
    ),
    province: t.Optional(
        t.String({
            example: 'Jawa Timur'
        })
    )
});

export const UpdateAddressResponse = {
    200: t.Object({
        data: t.Any(),
        message: t.String({ default: 'Address data has been updated' })
    }),
    400: t.Object({ message: t.String({ default: 'Update data is failed'}) })
};