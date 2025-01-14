import Elysia, { t } from 'elysia';

import { AuthController } from '../../modul/auth/auth.controller';
import { swaggerDetails } from '../../utils/responseHelper';
import {
  LoginUserBody,
  LoginUserResponse,
  SignupUserBody,
  SignupResponse,
  logoutFrfreshTokenBody,
  logoutResponse,
  refreshTokenResponse
} from '../../modul/auth/auth.validate';

const authController = new AuthController();

export const authRoute = new Elysia({
  prefix: '/auth',
  detail: { description: 'Authentication endpoints', tags: ['2.Auth'] }
})
  // .get('/', authController.root, {
  //   detail: swaggerDetails('Hello World')
  // })
  .post('/signup', authController.signup, {
    detail: swaggerDetails('Signup User'),
    body: SignupUserBody,
    response: SignupResponse
  })
  .post('/signup-admin', authController.signup, {
    detail: swaggerDetails('Signup User Admin'),
    body: SignupUserBody,
    response: SignupResponse
  })
  .post('/login', authController.login, {
    detail: swaggerDetails('Login'),
    body: LoginUserBody,
    response: LoginUserResponse
  })
  .post('logout', authController.logout, {
    detail: swaggerDetails('Logout User'),
    body: logoutFrfreshTokenBody,
    response: logoutResponse
  })
  .post('refresh-token', authController.refreshToken, {
    detail: swaggerDetails('Refresh Token'),
    body: logoutFrfreshTokenBody,
    response: refreshTokenResponse
  });

// .post('refresh-tokens');
