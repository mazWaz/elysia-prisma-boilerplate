import Elysia, { t } from 'elysia';
import { UserController } from '../../modul/user/user.controller';
import {
  checkAuth,
  checkDepartmentAccess,
  checkDepartmentAssignment,
  createDepartmentResolver,
  requireRoles // import requireRoles
} from '../../middelware/authCheck';
import {
  CreateUser,
  CreateUserResponse
} from '../../modul/user/user.validate';
import { swaggerDetails } from '../../utils/responseHelper';
import { paginationOptions } from '../../config/prisma';
import { userQueriesDTO } from '../../modul/user/user.validate';

const user = new UserController();

export const userRoute = new Elysia({
  prefix: '/user',
  detail: { description: 'User endpoints', tags: ['5.User'] }
})
  .onBeforeHandle([checkAuth])

  .get('/', user.getAllUser, {
    beforeHandle: [requireRoles('ADMIN', 'STAFF', 'SUPERADMIN')],
    query: t.Object({
      ...paginationOptions,
      ...userQueriesDTO
    }),
    detail: swaggerDetails('Get All user', true)
  })

  .get('/:id', user.getUserById, {
    beforeHandle: [requireRoles('ADMIN', 'STAFF', 'SUPERADMIN')],
    detail: swaggerDetails('Get User By ID')
  })

  .post('/create', user.createUser, {
    beforeHandle: [
      requireRoles('ADMIN', 'STAFF', 'SUPERADMIN'),
      checkDepartmentAssignment
    ],
    detail: swaggerDetails('Create User'),
    body: CreateUser,
    response: CreateUserResponse
  })

  .patch('/:id', user.updateUser, {
    beforeHandle: [
      requireRoles('ADMIN', 'SUPERADMIN'),
      checkDepartmentAccess(createDepartmentResolver('Users', 'id'))
    ],
    detail: swaggerDetails('Update User')
  })

  .delete('/:id', user.deleteUser, {
    beforeHandle: [requireRoles('ADMIN', 'SUPERADMIN'),
      checkDepartmentAccess(createDepartmentResolver('Users', 'id'))],
    detail: swaggerDetails('Delete User')
  })