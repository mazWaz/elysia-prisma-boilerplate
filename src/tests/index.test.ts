import { describe, beforeAll, expect, it, afterAll } from "bun:test";
import { app } from '../index';
import { setAuthToken } from './utilstest/testAuth';
import { password } from "bun";
import { treaty } from "@elysiajs/eden";
import { authTest } from "./auth.test";
import { carTest } from "./car.route.test";
import { addressTest } from "./address.route.test";
import { userTest } from "./user.route.test";
import { userCarTest } from "./user_car.route.test";
import { locationTest } from "./location.route.test";
import { createTestClient } from "./utils/createTestClient";

interface TestContext {
   refreshToken: string;
   userToken: string;
   adminToken: string;
   testUserId: string;
 }
 
 const context: TestContext = {
   refreshToken: "",
   userToken: "",
   adminToken: "",
   testUserId: ""
 };

describe('Main test suite', async () => {
  authTest(context);

   afterAll( async () =>{
    await carTest(context);
    await addressTest(context);
    await userTest(context);
    await userCarTest(context);
    await locationTest(context);

    afterAll( async () => {
    const testClient = createTestClient(app);
      
      it('POST /v1/auth/logout - should invalidate refresh token', async () => {
        const response = await testClient.post('/v1/auth/logout', {
          refreshToken: context.refreshToken,
        });
  
        expect(response.status).toBe(400);
      });
    })
   })
});