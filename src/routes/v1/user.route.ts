import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import {
  auth,
  checkAuth,
  checkIsAdmin,
  checkIsStaff,
  checkIsSuperAdmin
} from '../../middelware/authCheck';
import { 
  CreateUser,
  CreateUserResponse
} from '../../modul/user/user.validate';
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

  .get('/:id', user.getUserById, {
    beforeHandle: auth(userRole.USER),
    detail: swaggerDetails('Get User By ID')
  })

  .post('/create', user.createUser, {
    beforeHandle: auth(userRole.USER),
    detail: swaggerDetails('Create User'),
    body: CreateUser,
    response: CreateUserResponse
  })

  .patch('/:id', user.updateUser, {
    beforeHandle: auth(userRole.USER),
    detail: swaggerDetails('Update User')
  })

  .delete('/:id', user.deleteUser, {
    beforeHandle: auth(userRole.USER),
    detail: swaggerDetails('Delete User')
  })