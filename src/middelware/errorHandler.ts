import { error } from 'elysia';
import config from '../config/config';
import logger from '../config/logger';
import ApiError from '../utils/apiError';
import { HttpStatusEnum } from '../utils/httpStatusCode';
import { CustomError } from './middleware.interface';
import { Prisma } from '@prisma/client';

export function ErrorMessages(code: string, error: CustomError, set: any) {
  let statusCode = '';
  let message = '';
  if (!(error instanceof ApiError)) {
    const statusCode =
      error instanceof Prisma.PrismaClientKnownRequestError
        ? HttpStatusEnum.HTTP_400_BAD_REQUEST
        : error.statusCode || HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
    message = error.message || HttpStatusEnum[error.statusCode];
  }
  if (config.env == 'production' && !error.isOperational) {
    statusCode = String(HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR);
    message = 'INTERNAL_SERVER_ERROR';
  }
  set.ErrorMessages = error.message;
  const response = {
    code: statusCode || error.statusCode,
    message: message || error.message,
    ...(config.env === 'development' && { stack: error.stack })
  };

  if (config.env === 'development') {
    logger.error(error);
  }
}
