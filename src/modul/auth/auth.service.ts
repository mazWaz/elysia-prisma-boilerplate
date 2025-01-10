import { User } from '@prisma/client';
import { UsersService } from '../user/user.service';
import exclude from '../../utils/exclude';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import ApiError from '../../utils/apiError';
import { AuthTokensResponse } from './auth.interface';
import moment from 'moment';
import config from '../../config/config';

export class AuthService {
  private static instance: AuthService;
  private usersService: UsersService;

  constructor() {
    this.usersService = UsersService.getInstace();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  async login(username: string, email: string, password: string, rememberMe: boolean) {
    let user: Promise<Omit<User, 'password'>>;

    if (username) {
      return this.loginWithUsernameAndPassword(username, password);
    }
    return this.loginWithEmailAndPassword(email, password);
  }

  async loginWithUsernameAndPassword(
    username: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.getUserByUsername(username, [
      'id',
      'username',
      'email',
      'password',
      'role',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ]);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Invalid User credentials');
    }

    //TODO: Add Active User in prisma
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
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.getUserByEmail(email, [
      'id',
      'username',
      'email',
      'password',
      'role',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
      
    ]);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Invalid User credentials');
    }

    //TODO: Add Active User in prisma
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
