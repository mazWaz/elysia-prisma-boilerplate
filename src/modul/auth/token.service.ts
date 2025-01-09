import { TokenType } from './../../../node_modules/.prisma/client/index.d';
import { User } from '@prisma/client';
import { Moment } from 'moment';
import config from '../../config/config';
import moment from 'moment';

export class TokenService {
  constructor() {}
  /**
   * Generate token
   * @param user
   * @param {Moment} expires
   * @param {string} type
   * @param {string} [secret]
   * @returns {string}
   */
  generateToken(
    user: User,
    expires: Moment,
    type: TokenType,
    elysiaJwt: any,
    secret: string = config.jwt.secret
  ): string {
    const payload = {
      sub: user.id,
      name: user.username,
      email_verified: user.isEmailVerified,
      role: user.role,
      picture: null,
      iat: moment().unix(),
      exp: expires.unix(),
      type
    };
    return elysiaJwt.sign(
      {
        payload
      },
      { jwtExpiresIn: expires.unix() }
    );
  }

  async generateAuthTokens(user: User, elysia_jwt: any): Promise<AuthTokensResponse> {
    const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const accessToken = this.generateToken(
      user,
      accessTokenExpires,
      TokenType.ACCESS,
      elysia_jwt,
      undefined
    );
  }
}
