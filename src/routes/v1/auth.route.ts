import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import { LoginUserDTO } from '../../modul/auth/auth.validation';
import { AuthController } from '../../modul/auth/auth.controller';
import { swaggerDetails } from '../../utils/responseHelper';
import {
  LoginUserBody,
  LoginUserResponse,
  SignupUserBody,
  SignupResponse
} from '../../modul/auth/auth.validate';

const authController = new AuthController();

export const authRoute = new Elysia({
  prefix: '/auth',
  detail: { description: 'Authentication endpoints', tags: ['2.Auth'] }
})
  // .get('/', authController.root, {
  //   detail: swaggerDetails('Hello World')
  // })
  .post('/login', authController.login, {
    detail: swaggerDetails('Login'),
    body: LoginUserBody,
    response: LoginUserResponse
  })

  .post('/signup', authController.signup, {
    detail: swaggerDetails('Signup User'),
    body: SignupUserBody,
    response: SignupResponse
  })
  .post('/signup-admin', authController.signup, {
    detail: swaggerDetails('Signup User Admin'),
    body: SignupUserBody,
    response: SignupResponse
  });
