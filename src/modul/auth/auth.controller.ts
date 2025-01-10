import { TokenService } from './token.service';
import moment from 'moment';
import config from '../../config/config';
import ApiError from '../../utils/apiError';
import { catchAsync } from '../../utils/catchAsync';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { UsersService } from '../user/user.service';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

export class AuthController {
  private usersService: UsersService;
  private authService: AuthService;
  private tokenService: TokenService;

  constructor() {
    this.usersService = UsersService.getInstace();
    this.authService = AuthService.getInstance();
    this.tokenService = TokenService.getInstance();
  }
  root = catchAsync(
    async ({
      set,
      request: { headers },
      body,
      elysia_jwt,
      authMethod,
      cookie: { lucia_auth_cookie },
      session
    }: any) => {
      const jwtExpiresIn = config.jwt.accessExpirationMinutes + 'min'; // in days

      const accessToken = await elysia_jwt.sign(
        {
          id: 1,
          firstname: 'ABS',
          lastname: 'ABS',
          username: 'ABS',
          roles: 'ABS',
          emailVerified: 'ABS',
          createdAt: 'ABS',
          profileId: 'ABS',
          iat: moment().unix()
        },
        { jwtExpiresIn: moment().add(config.jwt.accessExpirationMinutes, 'day').unix() }
      );
      return {
        data: accessToken,
        message: 'Successfully logged in',
        note: ''
      };
    }
  );

  // root(): string {
  //   throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Error Test');
  // }

  login = catchAsync(async ({ set, request: { headers }, body, elysia_jwt }: any) => {
    const { email, username, password, rememberme } = body;

    const user = await this.authService.login(email, username, password, rememberme);
    const tokens = await this.tokenService.generateAuthTokens(user as User, elysia_jwt);

    return {
      data: { user, tokens },
      message: 'Successfully logged in',
      note: ''
    };
  });
}
