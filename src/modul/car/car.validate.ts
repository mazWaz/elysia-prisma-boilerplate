import { t } from 'elysia';

export const CreateCar = t.Object({
    name: t.Optional(
        t.String({
            example: 'Toyota Supra Twin Turbo A80',
            description: 'Name of the car'
        })
    ),
    brand: t.Optional(
        t.String({
            example: 'Toyota',
            description: 'Manufacturer of the car'
        })
    ),
    release_year: t.Optional(
        t.Number({
            example: 2002,
            description: 'Year of the car is produced by manufacturer'
        })
    ),
    plate_number: t.Optional(
        t.String({
            example: 'Toyota',
            description: 'Manufacturer of the car'
        })
    ),
    status: t.Optional(
        t.String({
            examples: 'Active / Unactive',
            description: 'Choose wherether Active or Unactive'
        })
    )
});

export const CreateCarResponse = {
    200: t.Object({
        data: t.Object({
            id: t.Number(),
            name: t.String(),
            brand: t.String(),
            release_year: t.Number(),
            plate_number: t.String(),
            status: t.String(),
            createdAt: t.String(),
            updatedAt: t.String(),
        }),
        message: t.String({ default: 'Car data has been inserted' })
    }),
    400: t.Object({ message: t.String({ default: 'Insert car data failed'}) })
};

export const UpdateCar = t.Object({
    name: t.Optional(
        t.String({
            format: 'name',
            example: 'Toyota Supra Twin Turbo A80',
            description: 'Name of the car'
        })
    ),
    brand: t.Optional(
        t.String({
            example: 'Toyota',
            description: 'Manufacturer of the car'
        })
    ),
    release_year: t.Optional(
        t.String({
            example: 2003,
            description: 'Year of the car is produced by manufacturer'
        })
    ),
    plate_number: t.Optional(
        t.String({
            example: 'Toyota',
            description: 'Manufacturer of the car'
        })
    ),
    status: t.Optional(
        t.String({
            examples: 'Active',
            description: 'Choose wherether Active or Unactive'
        })
    )
});

export const UpdateCarResponse = {
    200: t.Object({
        data: t.Any(),
        message: t.String({ default: 'Car data has been updated' })
    }),
    400: t.Object({ message: t.String({ default: 'Data is denied'}) })
};

export const getCarById = {
    200: t.Object({
        data: t.Any()
    }),
    400: t.Object({ message: t.String({ default: 'Failed to fetch'}) })
}