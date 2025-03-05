import { error } from 'elysia';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { db } from '../../config/prisma';
import { Prisma, Roles, Users } from '@prisma/client';

export class UsersService {
  private static instance: UsersService;

  public static getInstace(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }

    return UsersService.instance;
  }
  async getUserByid<Key extends keyof Users>(
    id: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'address',
      'roleId',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<Users, Key> | null> {
    return db.users.findUnique({
      where: { id },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Users, Key> | null>;
  }

  async getUserByEmail<Key extends keyof Users>(
    email: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'address',
      'roleId',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<Users, Key> | null> {
    return db.users.findUnique({
      where: { email },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Users, Key> | null>;
  }

  async getUserByUsername<Key extends keyof Users>(
    username: string,
    keys: Key[] = [
      'id',
      'email',
      'username',
      'address',
      'roleId',
      'isEmailVerified',
      'createdAt',
      'updatedAt'
    ] as Key[]
  ): Promise<Pick<Users, Key> | null> {
    return db.users.findUnique({
      where: { username },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Users, Key> | null>;
  }

  async createUser(
    email: string,
    username: string,
    password: string,
    roleId: number,
    departmentId: string,
    isEmailVerified = false
  ): Promise<Users> {
    
    if (await this.getUserByEmail(email)) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Email already taken');
    }

    if (await this.getUserByUsername(username)) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Username already taken');
    }
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: 'argon2id',
      memoryCost: 5,
      timeCost: 5
    });

    try {
      return await db.users.create({
        data: {
          email,
          username,
          roleId,
          departmentId,
          password: hashedPassword,
          isEmailVerified,
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser<Key extends keyof Users>(
    userId: string,
    updateBody: Prisma.UsersUpdateInput,
    keys: Key[] = ['id', 'email', 'username', 'role'] as Key[]
  ): Promise<Pick<Users, Key> | null> {
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

    if (updateBody.password) {
      updateBody.password = await Bun.password.hash(updateBody.password as string, {
        algorithm: 'argon2id',
        memoryCost: 5,
        timeCost: 5,
      });
    }

    const updatedUser = await db.users.update({
      where: { id: user.id },
      data: {
        email: updateBody.email,
        username: updateBody.username,
        password: updateBody.password,
      },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    });

    return updatedUser as Pick<Users, Key> | null;
  }

  async deleteUserById(userId: string): Promise<Users> {
    const user = await this.getUserByid(userId);
    if (!user) {
      throw new ApiError(HttpStatusEnum.HTTP_400_BAD_REQUEST, 'Username already taken');
    }
    await db.users.delete({
      where: { id: user.id }
    });
    return user;
  }
}
