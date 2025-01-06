import { t } from 'elysia';

export const LoginUserBody = t.Object({
  email: t.String({
    format: 'email',
    example: 'asdas@mail.com',
    description: 'mail@mail.com'
  }),
  password: t.String(),
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
  500: t.Object({ message: t.String({ default: 'An unknown login error occurred' }) })
};
