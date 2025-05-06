import { UsersService } from './../user/user.service';
import { TokenService } from './token.service';
import { Roles, TokenType, Users } from '@prisma/client';
import exclude from '../../utils/exclude';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import ApiError from '../../utils/apiError';
import { AuthTokensResponse } from './auth.interface';
import moment from 'moment';
import config from '../../config/config';
import { db } from '../../config/prisma';

export class AuthService {
  private static instance: AuthService;
  private usersService: UsersService;
  private tokenService: TokenService;

  constructor() {
    this.usersService = UsersService.getInstace();
    this.tokenService = TokenService.getInstance();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  async login(email: string, username: string, password: string, rememberMe: boolean) {
    if (username) {
      return this.loginWithUsernameAndPassword(username, password);
    }
    return this.loginWithEmailAndPassword(email, password);
  }

  async refreshAuth(refreshToken: string, elysia_jwt: any): Promise<AuthTokensResponse> {
    try {
      const refreshTokenData = await this.tokenService.verifyToken(
        refreshToken,
        TokenType.REFRESH,
        elysia_jwt
      );
      const { userId } = refreshTokenData;
      const user = await this.usersService.getUserByid(userId);

      await db.token.update({
        where: { id: refreshTokenData.id },
        data: { blacklisted: true }
      });

      return this.tokenService.generateAuthTokens(user as Users, elysia_jwt);
    } catch (error) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Please authenticate');
    }
  }

  async logout(refreshToken: string): Promise<void> {
    const refreshTokenData = await db.token.findFirst({
      where: {
        token: refreshToken,
        type: TokenType.REFRESH,
        blacklisted: false
      }
    });

    if (!refreshTokenData) {
      throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Not Found');
    }
    await db.token.delete({
      where: {
        id: refreshTokenData.id
      }
    });
  }

  async loginWithUsernameAndPassword(
    username: string,
    password: string
  ): Promise<Omit<Users, 'password'>> {
    const user = await this.usersService.getUserByUsername(username, [
      'id',
      'username',
      'email',
      'password',
      'roleId',
      'departmentId',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ]);

    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Invalid User credentials');
    }

    if (user.isEmailVerified === false || !user.isEmailVerified) {
      throw new ApiError(HttpStatusEnum.HTTP_403_FORBIDDEN, 'User access is revoked');
    }

    const isMatch = await Bun.password.verify(password, user.password);
    if (!user || !isMatch) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Incorrect email or password');
    }

    return exclude(user, ['password']);
  }

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<Omit<Users, 'password'>> {
    const user = await this.usersService.getUserByEmail(email, [
      'id',
      'username',
      'email',
      'password',
      'roleId',
      'departmentId',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ]);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Invalid User credentials');
    }

    if (user.isEmailVerified === false || !user.isEmailVerified) {
      throw new ApiError(HttpStatusEnum.HTTP_403_FORBIDDEN, 'User access is revoked');
    }

    const isMatch = await Bun.password.verify(password, user.password);
    if (!user || !isMatch) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Incorrect email or password');
    }

    return exclude(user, ['password']);
  }
}
