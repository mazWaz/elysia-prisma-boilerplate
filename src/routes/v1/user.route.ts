import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';

const user = new UserController();

export const userRoute = new Elysia({
  prefix: '/user',
  detail: { description: 'User endpoints', tags: ['User'] }
})
  .get('/', user.getAllUser)
  .get('/user', 'hello User');
