import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import {
  auth,
  checkAuth,
  checkIsAdmin,
  checkIsStaff,
  checkIsSuperAdmin
} from '../../middelware/authCheck';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { swaggerDetails } from '../../utils/responseHelper';
import { userRole } from '../../config/role';
import { paginationOptions } from '../../config/prisma';
import { userQueriesDTO } from '../../modul/user/user.validate';

const user = new UserController();

export const userRoute = new Elysia({
  prefix: '/user',
  detail: { description: 'User endpoints', tags: ['3.User'] }
})
  .onBeforeHandle([checkAuth])

  .get('/', user.getAllUser, {
    beforeHandle: auth(userRole.USER),
    query: t.Object({
      ...paginationOptions,
      ...userQueriesDTO
    }),
    detail: swaggerDetails('Get All user', true)
  })
  .get('/user', 'hello User')
  .get('/test', user.testUser, {
    detail: swaggerDetails('Initialize App')
  });
