// src/utils/catchAsync.ts

import { Context } from 'elysia';

type AsyncHandler<T = any, R = any> = (context: T) => Promise<R>;

/**
 * A higher-order function to catch errors in asynchronous route handlers.
 * @param fn - The asynchronous route handler to wrap.
 * @returns A new function that wraps the original handler with error handling.
 */
export const catchAsync = <T extends Context, R>(fn: AsyncHandler<T, R>): AsyncHandler<T, R> => {
  return async (context: T) => {
    try {
      return await fn(context);
    } catch (error) {
      // You can add logging here if needed
      throw error; // Let Elysia's global error handler manage it
    }
  };
};
