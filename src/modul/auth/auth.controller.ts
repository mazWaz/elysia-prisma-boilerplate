import { TokenService } from './token.service';
import moment from 'moment';
import config from '../../config/config';
import ApiError from '../../utils/apiError';
import { catchAsync } from '../../utils/catchAsync';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { UsersService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Users } from '@prisma/client';
import exclude from '../../utils/exclude';

export class AuthController {
  private usersService: UsersService;
  private authService: AuthService;
  private tokenService: TokenService;

  constructor() {
    this.usersService = UsersService.getInstace();
    this.authService = AuthService.getInstance();
    this.tokenService = TokenService.getInstance();
  }
  root = catchAsync(async ({}: any) => {
    return {
      data: 'asdwa',
      message: 'Successfully logged in',
      note: ''
    };
  });

  signup = catchAsync(async ({ set, body }: any) => {
    const { email, username, password, roleId, departmentId } = body;
    const user = await this.usersService.createUser(email, username, password, roleId, departmentId);
    const data = exclude(user, ['password', 'createdAt', 'updatedAt']);
    set.status = HttpStatusEnum.HTTP_201_CREATED;
    return {
      data,
      message: 'Successfully Created'
    };
  });

  signupByAdmin = catchAsync(async ({ set, body }: any) => {
    const { email, username, password, roleId, departmentId } = body;

    const data = await this.usersService.createUser(email, username, password, roleId, departmentId);

    set.status = HttpStatusEnum.HTTP_201_CREATED;
    return {
      data,
      message: 'Successfully Created'
    };
  });
  login = catchAsync(async ({ body, elysia_jwt }: any) => {
    const { email, username, password, rememberme } = body;

    const user = await this.authService.login(email, username, password, rememberme);
    const tokens = await this.tokenService.generateAuthTokens(user as Users, elysia_jwt);
    
    return {
      data: { user, tokens },
      message: 'Successfully logged in'
    };
  });

  logout = catchAsync(async ({ body, set }: any) => {
    const tokens = await this.authService.logout(body.refreshToken);
    return {
      message: 'Successfully Logout'
    };
  });

  refreshToken = catchAsync(async ({ body, elysia_jwt }: any) => {
    const tokens = await this.authService.refreshAuth(body.refreshToken, elysia_jwt);
    return {
      data: tokens,
      message: 'Successfully Create Refresh Token'
    };
  });
}
