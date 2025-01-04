import { error } from 'elysia';
import config from '../config/config';
import logger from '../config/logger';
import ApiError from '../utils/apiError';
import { HttpStatusEnum } from '../utils/httpStatusCode';
import { CustomError } from './middleware.interface';
import { Prisma } from '@prisma/client';

function handleNotFoundError(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_404_NOT_FOUND;
  return { message: 'Route not found 😔', code: set.status };
}

function handleInternalServerError(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return { message: 'Internal Server Error ⚠️', code: set.status, error: error };
}

function handleValidation(error: CustomError, set: any) {
  console.error(error);

  set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
  if (error.validator && error.validator.schema && error.validator.schema.properties) {
    return {
      code: set.status,
      message: 'Schema Validation Error 🚫',
      error: error.validator.schema.properties
    };
  } else {
    return {
      code: set.status,
      message: 'Data Validation Error 🙈',
      error: error
    };
  }
}

function handleParseError(error: CustomError, set: any) {
  // console.warn(error);

  set.status = set.status;
  return { message: 'Parse Error 💬', code: set.status, error: error };
}

function handleUnknownError(error: CustomError, set: any) {
  // console.error(error);
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return { code: set.status, message: '😞 An internal error occurred' };
}

function handleDatabaseInitError(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return {
    code: set.status,
    message: 'Our system ran into an error',
    note: 'Database has not been initialized'
  };
}
function handleDatabaseValidationError(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return { code: set.status, message: 'Data does not adhere to schema standard' };
}
function handleOAuth2Error(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return { code: set.status, message: 'An authentication state error occured' };
}
function handleRequestError(error: CustomError, set: any) {
  set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
  return { code: set.status, message: 'Database known request error' };
}

function handleAuthorizationError(error: CustomError, set: any) {
  set.status = 500;
  console.error(error);

  return {
    code: set.status,
    message: error.toString()
  };
}

function handleNoAccessError(error: CustomError, set: any) {
  // set.status = HttpStatusEnum.HTTP_424_FAILED_DEPENDENCY;
  return {
    code: set.status,
    message: 'Insufficient privileges',
    error: error.toString()
  };
}

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

  return response;
}
