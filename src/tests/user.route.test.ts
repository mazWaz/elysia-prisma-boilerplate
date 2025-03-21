import { describe, expect, it, afterAll, test } from "bun:test";;
import { app } from '../index';
import { randomUUID } from 'crypto';
import { createTestClient } from "./utils/createTestClient";
import { HttpStatusEnum } from "../utils/httpStatusCode";

interface TestContext {
    refreshToken: string;
    userToken: string;
    adminToken: string;
    testUserId: string;
}

export const userTest = async(context: TestContext) => {
    return describe('User Intergration Tests with Authentication', () => {
        const testClient = createTestClient(app, {
            Authorization: `Bearer ${context.userToken}`
        });

        const testId = randomUUID().substring(0, 3);
        let testUserId: string;

        const userBodyCreate = {
            email: `breath+${testId}@gmail.com`,
            username: `breath_${testId}`,
            password: 'B4silth3M@cEdon1an',
            roleId: 3,
            departmentId: '01JP1QG2CBWMMDRH4Y31V86F7V'
        };

        const userBodyUpdate = {
            email: `breath1+${testId}@gmail.com`,
            username: `breath1_${testId}`,
            password: 'B4silth3M@cEdon1an',
            roleId: 4,
            departmentId: '01JP1QG2CBWMMDRH4Y31V86F7V'
        };

        it('POST /user/create - should create a new User', async () => {
            const response= await testClient.post('/v1/user/create', userBodyCreate);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const body = await response.json<{
                data: { id: string}
            }>();
            testUserId = body.data.id;

            expect(testUserId).toBeDefined();
        });

        it('GET /user/ - should return all users', async () => {
            const response = await testClient.get('/v1/user');
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('GET /user/:id - should return a user by ID', async () => {
            const response = await testClient.get(`/v1/user/${testUserId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('PATCH /user/:id - should update a user', async () => {
            const response = await testClient.patch(
                `/v1/user/${testUserId}`,
                userBodyUpdate
            );
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('DELETE /user/:id - should delete a user', async () => {
            const response = await testClient.delete(`/v1/user/${testUserId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        afterAll(async () => {
            
        });
    })
}