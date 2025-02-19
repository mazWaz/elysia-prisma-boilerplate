import { describe, expect, it, afterAll, Test, test } from "bun:test";
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

export const locationTest = async(context: TestContext) => {
    return describe('LocationRoute Intergration Tests with Authentication', () => {
        const testClient = createTestClient(app, {
            Authorization: `Bearer ${context.userToken}`
        });

        const testId = randomUUID().substring(0, 3);
        let testLocationId: string;

        const locationBodyCreate = {
            location: "-7.2913648,112.7347603",
            user_carId: "01JMBSWH2J99JE0GCQGSBYRN3M"
        };

        const locationBodyUpdate = {
            location: "-7.2913648,112.8347603"
        };

        it('POST /location/create - should create a new location', async () => {
            const response = await testClient.post('/v1/location/create', locationBodyCreate);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const body = await response.json<{
                data: { id: string }
            }>();
            testLocationId = body.data.id;

            expect(testLocationId).toBeDefined();
        });

        it('GET /location/ - should return all location', async () => {
            const response = await testClient.get('/v1/location/');
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('GET /location/:id - should return a location by ID', async () => {
            const response = await testClient.get(`/v1/location/getlocation/${testLocationId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('PATCH /location/:id - should update a location', async () => {
            const response = await testClient.patch(
                `/v1/location/${testLocationId}`,
                locationBodyUpdate
            );
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('DELETE /location/:id - should delete a location', async () => {
            const response = await testClient.delete(`/v1/location/${testLocationId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const deletedResponse = await testClient.get(`/v1/location/${testLocationId}`);
            expect(deletedResponse.status).toBe(HttpStatusEnum.HTTP_404_NOT_FOUND);
        });
    });
}