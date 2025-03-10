// user.route.ts
import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import {
  checkAuth,
  checkIsAdmin,
  checkIsStaff,
  checkIsSuperAdmin,
  checkIsUser, // import individual role checks
  requireRoles // import requireRoles
} from '../../middelware/authCheck';
import {
  CreateUser,
  CreateUserResponse
} from '../../modul/user/user.validate';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { swaggerDetails } from '../../utils/responseHelper';
import { paginationOptions } from '../../config/prisma';
import { userQueriesDTO } from '../../modul/user/user.validate';
import { userRole } from '../../config/role'; // import userRole type

const user = new UserController();

export const userRoute = new Elysia({
  prefix: '/user',
  detail: { description: 'User endpoints', tags: ['5.User'] }
})
  .onBeforeHandle([checkAuth])

  .get('/', user.getAllUser, {
    beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
    query: t.Object({
      ...paginationOptions,
      ...userQueriesDTO
    }),
    detail: swaggerDetails('Get All user', true)
  })

  .get('/:id', user.getUserById, {
    //beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
    detail: swaggerDetails('Get User By ID')
  })

  .post('/create', user.createUser, {
    //beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
    detail: swaggerDetails('Create User'),
    body: CreateUser,
    response: CreateUserResponse
  })

  .patch('/:id', user.updateUser, {
    //beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
    detail: swaggerDetails('Update User')
  })

  .delete('/:id', user.deleteUser, {
    //beforeHandle: [requireRoles('USER', 'ADMIN', 'SUPERADMIN')],
    detail: swaggerDetails('Delete User')
  })