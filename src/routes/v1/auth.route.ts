import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import { LoginUserDTO } from '../../modul/auth/auth.validation';
import { AuthController } from '../../modul/auth/auth.controller';
import { swaggerDetails } from '../../utils/responseHelper';
import { LoginUserBody, LoginUserResponse } from '../../modul/auth/auth.validate';

const authController = new AuthController();

export const authRoute = new Elysia({
  prefix: '/auth',
  detail: { description: 'Authentication endpoints', tags: ['Auth'] }
})
  .get('/', authController.root, {
    detail: swaggerDetails('Hello World')
  })

  .post('/login', authController.login, {
    detail: swaggerDetails('Sign in'),
    body: LoginUserBody,
    response: LoginUserResponse
  });
