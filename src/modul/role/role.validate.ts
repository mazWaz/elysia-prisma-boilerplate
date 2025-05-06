import { t } from 'elysia';

export const CreateRoles = t.Object({
    name: 
        t.String({
            example: 'Administrator'
        }),
    description: 
        t.String({
            example: 'Have full access on the system'
        })
});

export const CreateRolesResponse = {
    200: t.Object({
        data: t.Object({
            id: t.Number(),
            name: t.String(),
            description: t.String(),
            createdAt: t.String(),
            updatedAt: t.String(),
        }),
        message: t.String({ default: 'Roles data has been inserted' })
    }),
    400: t.Object({ message: t.String({ default: 'Insert Roles data failed'}) })
};

export const UpdateRoles = t.Object({
    name: t.Optional(
        t.String({
            example: 'Administator'
        })
    ),
    description: t.Optional(
        t.String({
            example: 'Have full access on the system'
        })
    )
});

export const UpdateRolesResponse = {
    200: t.Object({
        data: t.Any(),
        message: t.String({ default: 'Roles data has been updated' })
    }),
    400: t.Object({ message: t.String({ default: 'Update data is failed'}) })
};