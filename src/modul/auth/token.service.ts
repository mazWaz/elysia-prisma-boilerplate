import { Token, TokenType, Users } from '@prisma/client';
import { Moment } from 'moment';
import config from '../../config/config';
import moment from 'moment';
import { AuthTokensResponse } from './auth.interface';
import { db } from '../../config/prisma';
import ApiError from '../../utils/apiError';
import { HttpStatusEnum } from '../../utils/httpStatusCode';

export class TokenService {
  private static instance: TokenService;
  constructor() {}

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }

    return TokenService.instance;
  }

  async generateToken(
    user: Users,
    expires: Moment,
    type: TokenType,
    elysiaJwt: any,
    secret: string = config.jwt.secret
  ): Promise<string> {
    const userWithDept = await db.users.findUnique({
      where: { id: user.id },
      select: {
        department: {
          select: { category: true, province: true, district: true, subDistrict: true }
        }
      }
    });

    const payload = {
      sub: user.id,
      name: user.username,
      deptId: user.departmentId,
      deptCategory: userWithDept?.department?.category,
      deptProvince: userWithDept?.department?.province,
      deptDistrict: userWithDept?.department?.district,
      deptSubDistrict: userWithDept?.department?.subDistrict,
      roleId: user.roleId,
      email_verified: user.isEmailVerified,
      iat: moment().unix(),
      exp: expires.unix(),
      type
    };

    return await elysiaJwt.sign(
      {
        payload
      },
      { jwtExpiresIn: expires.unix() }
    );
  }

  async saveToken(
    token: string,
    userId: string,
    expires: Moment,
    type: TokenType,
    blacklisted: boolean = false
  ) {
    return db.token.create({
      data: { token, userId: userId, expires: expires.toDate(), type, blacklisted }
    });
  }

  async verifyToken(token: string, type: TokenType, user: any): Promise<Token> {
    const userId = user.sub;

    const tokenData = await db.token.findFirst({
      where: { token, type, userId, blacklisted: false }
    });
    if (!tokenData) {
      throw new ApiError(HttpStatusEnum.HTTP_404_NOT_FOUND, 'Token Not Found');
    }

    return tokenData;
  }

  async generateAuthTokens(user: Users, elysia_jwt: any): Promise<AuthTokensResponse> {
    const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const accessToken = await this.generateToken(
      user,
      accessTokenExpires,
      TokenType.ACCESS,
      elysia_jwt,
      undefined
    );

    const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
    const refreshToken = await this.generateToken(
      user,
      refreshTokenExpires,
      TokenType.REFRESH,
      elysia_jwt,
      undefined
    );

    await this.saveToken(refreshToken, user.id, refreshTokenExpires, TokenType.REFRESH);

    return {
      access: {
        token: accessToken,
        expires: accessTokenExpires.toDate()
      },
      refresh: {
        token: refreshToken,
        expires: refreshTokenExpires.toDate()
      }
    };
  }
}
