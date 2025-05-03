import { describe, expect, it, afterAll, test } from "bun:test";
import { app } from '../index';
import { randomUUID } from 'crypto';
import { createTestClient } from "./utils/createTestClient";
import { HttpStatusEnum } from "../utils/httpStatusCode";

interface TestContext{
    refreshToken: string;
    userToken: string;
    adminToken: string;
    testUserId: string;
}

export const userCarTest = async(context: TestContext) => {
    return describe('UserCarRoute Intergration Test with Authentication', () => {
        const testClient = createTestClient(app, {
            Authorization: `Bearer ${context.userToken}`
        });

        const testId = randomUUID().substring(0, 3);
        let testUserCarId: string;

        const userCarBodyCreate = {
            carId: '01JT0B0R75G7A2MFM9YCJ82KQI',
            userId: '01JTABCDEFGHIJKLMNOPQRSTUV'
        };

        const userCarBodyUpdate = {
            carId: '01JT0B0R75G7A2MFM9YCJ82KQI',
            userId: '01JTABCDEFGHIJKLMNOPQRSTUV'
        };

        it('POST /usercar/create - should create a new user car', async () => {
            const response = await testClient.post('/v1/usercar/create', userCarBodyCreate);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const body = await response.json<{
                data: { id: string }
            }>();
            testUserCarId = body.data.id;

            expect(testUserCarId).toBeDefined();
        });

        it('GET /usercar/:id - should return an usercar by ID', async () => {
            const response = await testClient.get(`/v1/usercar/${testUserCarId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('PATCH /usercar/:id - should update a userCar', async () => {
            const response = await testClient.patch(
                `/v1/usercar/${testUserCarId}`,
                userCarBodyUpdate
            );
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('GET /usercar/ - should return all usercar', async () => {
            const response = await testClient.get('/v1/usercar');
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('DELETE /usercar/:id - should delete a userCar', async () => {
            const response = await testClient.delete(`/v1/usercar/${testUserCarId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        afterAll(async () => {

        });

    })
}