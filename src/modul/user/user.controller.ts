import { number } from 'joi';
// src/controllers/user.controller.ts
import { Context } from 'elysia';
import { UsersService } from './user.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import { prismaSearch, SearchOptions } from '../../config/prisma';
import exclude from '../../utils/exclude';

export class UserController {
  private userSvc: UsersService;

  constructor() {
    this.userSvc = new UsersService();
  }

  testUser = catchAsync(async ({ set }: any) => {
    set.status = HttpStatusEnum.HTTP_200_OK;
    return { data: { asdasd: 'asdasd' }, message: `All Systems GO!` };
  });

  getAllUser = catchAsync(async ({ set, query }: any) => {
    const { isEmailVerified, profile } = query;
    const { page, limit, sortBy, sortOrder, searchField, search } = query;
    console.log('askdksajdasd', searchField !== 'role');
    const searchOptions: SearchOptions = {
      page,
      limit,
      sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
      search:
        searchField !== 'role'
          ? { field: searchField ?? 'username', value: search }
          : { field: searchField ?? 'username', value: search, operator: 'equals' },
      include: { password: false, address: true }
    };

    const users = await prismaSearch('user', searchOptions);
    set.status = HttpStatusEnum.HTTP_200_OK;
    if (!users) {
      set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
      return { message: 'Could not fetch Users' };
    }
    set.status = HttpStatusEnum.HTTP_200_OK;
    return users;
  });

  getUserById = catchAsync(async ({ set, params }:any ) => {
    const { id } = params;

    //const userId = parseInt(id, 10)

    const user = await this.userSvc.getUserByid(id);
    const data = exclude(user, ['createdAt', 'updatedAt', 'isEmailVerified'] as (keyof typeof user)[]);

    set.status = HttpStatusEnum.HTTP_200_OK;
    return {
      data
    };

  });

  createUser = catchAsync(async ({ set, body }: any) => {
    const { email, username, password, role } = body;
    const existEmail = await this.userSvc.getUserByEmail(email);
    const existUsername = await this.userSvc.getUserByUsername(username);

    if ( existEmail || existUsername ) {
      set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
      return {
        message: `Email or Username already taken. Choose something else`
      };
    };
    

    const data = await this.userSvc.createUser(
      email,
      username,
      password,
      role
    );

    set.status = HttpStatusEnum.HTTP_200_OK;
    return {
      data: {
          ...data,
          createdAt: data.createdAt.toISOString(),
          updatedAt: data.updatedAt.toISOString(),
      },

      message: 'User data has been inserted',
    };
  });

  updateUser = catchAsync(async ({ set, body, params }: any) => {
    const { id } = params;
    const { email, username, password, role } = body;
    
    const existEmail = await this.userSvc.getUserByEmail(email);
    const existUsername = await this.userSvc.getUserByUsername(username);

    if ( existEmail || existUsername) {
      set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;

      return {
        message: 'Email or Username is already registered. Pick something else'
      }
    };

    const data = await this.userSvc.updateUser(
      id,
      body
    );
    
    set.status = HttpStatusEnum.HTTP_200_OK;
    return {
      data
    };
  })

  deleteUser = catchAsync(async ({ set, params }: any) => {
    const { id } = params;

    const dataExist = await this.userSvc.getUserByid(id);

    if (!dataExist) {
      set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;

      return {
        message: 'user does not exist'
      }
    };

    const data = await this.userSvc.deleteUserById(
      id
    )

    set.status = HttpStatusEnum.HTTP_200_OK
    return {
      message: 'Userdata has been deleted'
    }
  });


}