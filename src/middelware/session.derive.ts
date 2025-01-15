import { TokenType } from '@prisma/client';
import ApiError from '../utils/apiError';
import { HttpStatusEnum } from '../utils/httpStatusCode';

export const sessionDerive = async ({ bearer, elysia_jwt, error }: any) => {
  const token = await elysia_jwt.verify(bearer);

  if (!token) {
    return { user: null, session: null };
  }

  if (token.payload.type !== TokenType.ACCESS) {
    throw new ApiError(HttpStatusEnum.HTTP_401_UNAUTHORIZED, 'Please authenticate');
  }

  return { user: token.payload, session: null };
};
