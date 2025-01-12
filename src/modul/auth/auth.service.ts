import { Role, User } from '@prisma/client';
import { UsersService } from '../user/user.service';
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

  async createUser(
    email: string,
    username: string,
    password: string,
    role: Role = Role.USER,
    isEmailVerified = false
  ): Promise<User> {
    if (await this.usersService.getUserByEmail(email)) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Email already taken');
    }

    if (await this.usersService.getUserByUsername(username)) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Username already taken');
    }
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: 'argon2id',
      memoryCost: 5,
      timeCost: 5 // the number of iterations
    });

    return db.user.create({
      data: {
        email,
        username,
        role,
        password: hashedPassword,
        isEmailVerified
      }
    });
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
