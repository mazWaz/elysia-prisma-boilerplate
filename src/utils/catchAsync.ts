// src/utils/catchAsync.ts

import { Context } from 'elysia';

type AsyncHandler = (context: Context) => Promise<any>;

/**
 * A higher-order function to catch errors in asynchronous route handlers.
 * @param fn - The asynchronous route handler to wrap.
 * @returns A new function that wraps the original handler with error handling.
 */
export const catchAsync = (fn: AsyncHandler) => {
  return async (context: Context) => {
    try {
      return await fn(context);
    } catch (error) {
      // Rethrow the error to be handled by Elysia's onError middleware
      throw error;
    }
  };
};
