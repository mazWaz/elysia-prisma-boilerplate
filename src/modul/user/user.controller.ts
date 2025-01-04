import { number } from 'joi';
// src/controllers/user.controller.ts
import { Context } from 'elysia';
import { UsersService } from './user.service';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from '../../utils/catchAsync';
import { prismaSearch, SearchOptions } from '../../config/prisma';
import { query } from 'winston';
import ApiError from '../../utils/apiError';
import { User } from '@prisma/client';

export class UserController {
  private userSvc: UsersService;

  constructor() {
    this.userSvc = new UsersService();
  }

  getAllUser = catchAsync(async ({ set, query }: any) => {
    const { isActive, profile } = query;
    const { page, limit, sortBy, sortOrder, searchField, search } = query;
    const searchOptions = {
      page,
      limit,
      sortBy: { field: sortBy ?? 'createdAt', order: sortOrder },
      search: { field: searchField ?? 'lastname', value: search },
      include: { profile, isActive }
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
}
