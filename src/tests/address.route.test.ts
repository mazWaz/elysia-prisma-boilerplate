import { describe, expect, it, afterAll, test } from "bun:test";
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

export const addressTest = async(context: TestContext) => {
    return describe('AddressRoute', () => {
        // Create client with authentication header
        const testClient = createTestClient(app, {
            Authorization: `Bearer ${context.userToken}`
        });

        const testId = randomUUID().substring(0, 3);
        let testAddressId: string;

        const addressBodyCreate = {
            address: `Avenue Street Gg IV no ${testId}`,
            rt: 4,
            rw: 5,
            district: 'Klojen',
            city: 'Malang',
            province: 'Jawa Timur',
            userId: `${context.testUserId}`
        }

        const addressBodyUpdate = {
            address: `Avenue Street Gg IV no ${testId}`,
            rt: 5,
            rw: 8,
            district: 'Wonokromo',
            city: 'Surabaya',
            province: 'Jawa Timur',
            userId: `${context.testUserId}`
        }

        it('POST /address/create - should create a new address', async () => {
            const response = await testClient.post('/v1/address/create', addressBodyCreate);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const body = await response.json<{
                data: { id: string }
            }>();
            testAddressId = body.data.id;

            expect(testAddressId).toBeDefined();
        });

        it('GET /address/ - should return all address', async () => {
            const response = await testClient.get('/v1/address');
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('GET /address/:id - should return an address by ID', async () => {
            const response = await testClient.get(`/v1/address/${testAddressId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('PATCH /address/:id - should update an address by ID', async () =>{
            const response = await testClient.patch(
                `/v1/address/${testAddressId}`,
                addressBodyUpdate
            );
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('DELETE /address/:id - should delete a address by ID', async () => {
            const response = await testClient.delete(`/v1/address/${testAddressId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        afterAll(async () => {

        });

    });
};