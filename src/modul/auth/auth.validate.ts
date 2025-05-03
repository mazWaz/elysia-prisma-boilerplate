import { Roles } from '@prisma/client';
import { t } from 'elysia';

export const LoginUserBody = t.Object({
  email: t.Optional(
    t.String({
      format: 'email',
      example: 'basil@macedonian.com',
      description: 'Use Email Or Username'
    })
  ),
  username: t.Optional(
    t.String({
      example: 'basilius',
      description: 'Use Email Or Username'
    })
  ),
  password: t.String({
    minLength: 8,
    example: 'B4silth3M@cEdon1an',
    pattern: '^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$',
    description:
      'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
  }),
  rememberme: t.Optional(t.Boolean())
});

export const SignupUserBody = t.Object({
  email: t.Optional(
    t.String({
      format: 'email',
      example: 'basil@macedonian.com',
      description: 'Use Email Or Username'
    })
  ),
  username: t.Optional(
    t.String({
      example: 'basilius',
      description: 'Use Email Or Username'
    })
  ),
  password: t.String({
    minLength: 8,
    example: 'B4silth3M@cEdon1an',
    pattern: '^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$',
    description:
      'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
  }),
  roleId: t.Number({
    example: '1',
    description: 'Roles for assign'
  }),
  departmentId: t.String({
    example: '1X92BDJS',
    description: 'Which department user belong to'
  })
});

export const logoutFrfreshTokenBody = t.Object({
  refreshToken: t.String({
    example:
      'eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7InN1YiI6ImQxODczZDYzLTMyMWEtNGEyZi05MWNjLTJjNjAzZGMzYjE5OSIsIm5hbWUiOiJtYXNodTMyMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlIjoiVVNFUiIsInBpY3R1cmUiOm51bGwsImlhdCI6MTczNjgzNTQ4MiwiZXhwIjoxNzM5NDI3NDgyLCJ0eXBlIjoiUkVGUkVTSCJ9LCJleHAiOjE3MzY4MzcyNjV9.F1AxwxzHUPWkKL7HpcURZ3j9zaCDAh4UrOpS1kE97Vw',
    description: 'The JWT refresh token string.'
  })
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

export const logoutResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'Successfully Logout' })
  }),
  400: t.Object({ message: t.String({ default: 'Authentication Error' }) }),
  401: t.Object({ message: t.String({ default: 'Please authenticate' }) }),
  403: t.Object({ message: t.String({ default: 'User access is revoked.\nReason: ...' }) }),
  404: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  406: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  422: t.Object({ message: t.String({ default: 'Invalid Input' }) }),
  500: t.Object({ message: t.String({ default: 'An unknown login error occurred' }) })
};

export const refreshTokenResponse = {
  200: t.Object({
    data: t.Any(),
    message: t.String({ default: 'Successfully Create Refresh Token' })
  }),
  400: t.Object({ message: t.String({ default: 'Authentication Error' }) }),
  401: t.Object({ message: t.String({ default: 'Please authenticate' }) }),
  403: t.Object({ message: t.String({ default: 'User access is revoked.\nReason: ...' }) }),
  404: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  406: t.Object({ message: t.String({ default: 'Invalid credentials' }) }),
  422: t.Object({ message: t.String({ default: 'Invalid Input' }) }),
  500: t.Object({ message: t.String({ default: 'An unknown login error occurred' }) })
};
