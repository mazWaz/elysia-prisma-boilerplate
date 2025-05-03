import { error, t } from 'elysia';

export const userQueriesDTO = {
  isEmailVerified: t.Optional(t.BooleanString()),
  address: t.Optional(t.BooleanString({ default: false }))
};

export const CreateUserCar = t.Object({
  carId: 
      t.String({
        example: '01JT0B0R75G7A2MFM9YCJC8BLT',
        description: 'Car ID',
      }),
  userId: 
      t.String({
        examples: '01JT30NFXNFRQ98HQDSTJ1E3RY',
        description: 'User ID'
      })
})

export const CreateUserCarResponse = {
  200: t.Object({
    data: t.Object({
        id: t.String(),
        carId: t.String(),
        userId: t.String()
    }),
    message: t.String({ default: 'UserCar data has been inserted. '})
  }),
  400: t.Object({ message: t.String({ default: 'Insert UserCar failed.'})})
}

export const UpdateUserCar = t.Object({
  carId: t.Optional(
      t.String({
        example: '01JT0B0R75G7A2MFM9YCJC8BLT',
        description: 'Car ID',
      })
  ),
  userId: t.Optional(
      t.String({
        examples: '01JT30NFXNFRQ98HQDSTJ1E3RY',
        description: 'User ID'
      })
  )
});

export const UpdateUserCarResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'UserCar data has been updated' })
  }),
  400: t.Object({ message: t.String({ default: 'Failed to update UserCar data' }) })
};