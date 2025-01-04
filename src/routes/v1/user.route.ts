import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';

const user = new UserController();

const router = new Elysia({ prefix: '/user' })
  .get('/', user.getAllUser)
  .post('/user', 'hello User');

export default router;
