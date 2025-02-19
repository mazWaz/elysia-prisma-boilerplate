import { describe, expect, it, afterAll } from 'bun:test';
import { app } from '../index';
import { randomUUID } from 'crypto';
import { createTestClient } from './utils/createTestClient';

interface TestContext {
  refreshToken: string;
  userToken: string;
  adminToken: string;
  testUserId: string;
}

export const authTest = (context: TestContext)  => {
  return describe('Auth Routes', () => {
    const testClient = createTestClient(app);
    const testId = randomUUID().substring(0, 3);

    const userBodySignup = {
      email: `mashu+${testId}@gmail.com`,
      username: `mashu_${testId}`,
      password: 'B4silth3M@cEdon1an',
      role: 'USER' as const
    };

    const userBodyLogin = {
      username: 'basil',
      password: 'B4silth3M@cEdon1an'
    }

    afterAll(async () => {
    });

    it('POST /v1/auth/signup - should create new user', async () => {
      const response = await testClient.post('/v1/auth/signup', userBodySignup);
      expect(response.status).toBe(201);

      const body = await response.json<{
        data: { id: string };
      }>();
      context.testUserId = body.data.id;
    });

    it('POST /v1/auth/login - should authenticate user', async () => {
      const response = await testClient.post('/v1/auth/login', {
        username: userBodyLogin.username,
        password: userBodyLogin.password,
      });

      expect(response.status).toBe(200);

      const body = await response.json<{
        data: {
           tokens: {
            access: {
              token: string
            }
             refresh: {
               token: string 
              } 
            } 
          };
      }>();
      context.refreshToken = body.data.tokens.refresh.token;
      context.userToken = body.data.tokens.access.token;
    });

    it('POST /v1/auth/refresh-token - should refresh access token', async () => {
      const response = await testClient.post('/v1/auth/refresh-token', {
        refreshToken: context.refreshToken,
      });

      expect(response.status).toBe(200);
      const body = await response.json<{
        data: {
          refresh: {
            token: string
          }
        }
      }>();

      context.refreshToken = body.data.refresh.token;

      expect(body.data.refresh.token).toBeDefined();
    });

    it('POST /v1/auth/logout - should invalidate refresh token', async () => {
      const response = await testClient.post('/v1/auth/logout', {
        refreshToken: context.refreshToken,
      });

      expect(response.status).toBe(400);
    });
  });
}