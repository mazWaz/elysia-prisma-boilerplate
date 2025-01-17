import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Prisma, Role, User } from '@prisma/client';

export class UsersService {
  private static instance: UsersService;

  public static getInstace(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }

    return UsersService.instance;
  }
  async getUserByid<Key extends keyof User>(
    id: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'addresses',
      'role',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<User, Key> | null> {
    return db.user.findUnique({
      where: { id },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<User, Key> | null>;
  }

  async getUserByEmail<Key extends keyof User>(
    email: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'addresses',
      'role',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<User, Key> | null> {
    return db.user.findUnique({
      where: { email },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<User, Key> | null>;
  }

  async getUserByUsername<Key extends keyof User>(
    username: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'addresses',
      'role',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<User, Key> | null> {
    return db.user.findUnique({
      where: { username },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<User, Key> | null>;
  }

  async createUser(
    email: string,
    username: string,
    password: string,
    role: Role = Role.USER,
    isEmailVerified = false
  ): Promise<User> {
    if (await this.getUserByEmail(email)) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Email already taken');
    }

    if (await this.getUserByUsername(username)) {
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

  async updateUser<Key extends keyof User>(
    userId: string,
    updateBody: Prisma.UserUpdateInput,
    keys: Key[] = ['id', 'email', 'username', 'role'] as Key[]
  ): Promise<Pick<User, Key> | null> {
    const user = await this.getUserByid(userId, ['id', 'email', 'username']);

    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'User not found');
    }

    const [sameUsername, sameEmail] = await Promise.all([
      this.getUserByEmail(updateBody.email as string),
      this.getUserByUsername(updateBody.username as string)
    ]);

    if (updateBody.email && updateBody.username && sameUsername && sameEmail) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Email or Username already taken');
    }

    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: updateBody,
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });

    return updatedUser as Pick<User, Key> | null;
  }

  async updateUserRole<Key extends keyof User>(
    userId: string,
    role: Role,
    keys: Key[] = ['id', 'email', 'username', 'role'] as Key[]
  ): Promise<Pick<User, Key> | null> {
    const user = await this.getUserByid(userId);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Username already taken');
    }

    const updatedUserRole = await db.user.update({
      where: { id: user.id },
      data: {
        role
      },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });

    return updatedUserRole as Pick<User, Key> | null;
  }

  async deleteUserById(userId: string): Promise<User> {
    const user = await this.getUserByid(userId);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Username already taken');
    }
    await db.user.delete({
      where: { id: user.id }
    });
    return user;
  }
}
