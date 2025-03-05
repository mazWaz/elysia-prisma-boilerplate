import { error, t } from 'elysia';

export const userQueriesDTO = {
  isEmailVerified: t.Optional(t.BooleanString()),
  address: t.Optional(t.BooleanString({ default: false }))
};

export const CreateUser = t.Object({
  email: 
      t.String({
        example: 'basil@the.macedonian',
        description: 'Valid email that need to be verified after',
        validate: (value: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            throw new Error('Invalid email format');
          }
        }
      }),
  username: 
      t.String({
        examples: 'basil',
        description: 'Username for login'
      }),
  password: 
      t.String({
        example: 'B4silth3M@cEdon1an',
        description: 'You need to be atleast have number, special characters, and letter uppercase on you password'
      }),
  roleId: t.Number({
        example: 1,
        description: "Set by Admin"
      }),
  departmentId: t.String({
        example: '01XIWJFJA34',
        description: 'Department id that user working at'
  })
})

export const CreateUserResponse = {
  200: t.Object({
    data: t.Object({
        id: t.String(),
        username: t.String(),
        email: t.String(),
        roleId: t.Number(),
        departmentId: t.String()
    }),
    message: t.String({ default: 'Userdata has been inserted. '})
  }),
  400: t.Object({ message: t.String({ default: 'Insert userdata failed.'})})
}

export const UpdateUser = {
  email: 
      t.String({
        example: 'basil@the.macedonian',
        description: 'Valid email that need to be verified after',
        validate: (value: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            throw new Error('Invalid email format');
          }
        }
      }),
  username: 
      t.String({
        examples: 'basil',
        description: 'Username for login'
      }),
  password: 
      t.String({
        example: 'B4silth3M@cEdon1an',
        description: 'You need to be atleast have number, special characters, and letter uppercase on you password'
      }),
  roleId: 
      t.Number({
        example: 1,
        description: "Set by Admin"
      }),
  departmentId: 
      t.String({
        example: '01XIWJFJA34',
        description: 'Department id that user working at'
  })
}

export const UpdateUserResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'Userdata has been updated' })
  }),
  400: t.Object({ message: t.String({ default: 'Failed to update Userdata' }) })
};