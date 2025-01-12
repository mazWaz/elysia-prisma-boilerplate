import { Role } from '@prisma/client';
import { t } from 'elysia';

export const LoginUserBody = t.Object({
  email: t.Optional(
    t.String({
      format: 'email',
      example: 'mashu323@mail.com',
      description: 'Use Email Or Username'
    })
  ),
  username: t.Optional(
    t.String({
      example: 'mashu323',
      description: 'Use Email Or Username'
    })
  ),
  password: t.String({
    minLength: 8,
    example: 'Password123!',
    pattern: '^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$',
    description:
      'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
  }),
  rememberme: t.Optional(t.Boolean())
});

export const LoginUserResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'Successfully logged in' })
  }),
  400: t.Object({ message: t.String({ default: 'Authentication Error' }) }),
  403: t.Object({ message: t.String({ default: 'User access is revoked.\nReason: ...' }) }),
  404: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  406: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  422: t.Object({ message: t.String({ default: 'Invalid Input' }) }),
  500: t.Object({ message: t.String({ default: 'An unknown login error occurred' }) })
};

export const SignupUserBody = t.Object({
  email: t.Optional(
    t.String({
      format: 'email',
      example: 'mashu323@mail.com',
      description: 'Use Email Or Username'
    })
  ),
  username: t.Optional(
    t.String({
      example: 'mashu323',
      description: 'Use Email Or Username'
    })
  ),
  password: t.String({
    minLength: 8,
    example: 'Password123!',
    pattern: '^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$',
    description:
      'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
  }),
  role: t.Union([t.Literal(Role.SUPERADMIN), t.Literal(Role.ADMIN), t.Literal(Role.USER)], {
    example: 'ADMIN',
    description: 'Assign Role user by Super Admin Or Admin'
  })
});

export const SignupResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'Successfully logged in' })
  }),
  400: t.Object({ message: t.String({ default: 'Authentication Error' }) }),
  403: t.Object({ message: t.String({ default: 'User access is revoked.\nReason: ...' }) }),
  404: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  406: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  422: t.Object({ message: t.String({ default: 'Invalid Input' }) }),
  500: t.Object({ message: t.String({ default: 'An unknown login error occurred' }) })
};
