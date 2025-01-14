import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import {
  checkAuth,
  checkIsAdmin,
  checkIsStaff,
  checkIsSuperAdmin
} from '../../middelware/authCheck';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { swaggerDetails } from '../../utils/responseHelper';

const user = new UserController();

export const userRoute = new Elysia({
  prefix: '/user',
  detail: { description: 'User endpoints', tags: ['3.User'] }
})
  .onBeforeHandle([checkAuth])

  .get('/', user.getAllUser, {
    beforeHandle: [checkIsAdmin, checkIsSuperAdmin, checkIsStaff]
  })
  .get('/user', 'hello User')
  .get('/test', user.testUser, {
    detail: swaggerDetails('Initialize App', 'Returns data beneficial to initialization')
  });
