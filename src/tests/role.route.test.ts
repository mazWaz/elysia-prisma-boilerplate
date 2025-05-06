import { describe, expect, it, afterAll, test, Test } from "bun:test";
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

export const roleTest = async(context: TestContext) => {
    return describe('Role Route Intergration Test with Authentication', () => {
        const testClient = createTestClient(app, {
            Authorization: `Bearer ${context.userToken}`
        });

        const testId = randomUUID().substring(0, 3);
        let testRoleId: string;

        const roleBodyCreate = {
            name: 'DIRECTOR',
            description: 'Have a wide range on the system'
        }

        const roleBodyUpdate = {
            name: 'HEAD DIRECTOR',
            description: 'Have a wide range on the system'
        }

        it('POST /role/create - should create a new role', async () => {
            const response = await testClient.post('/v1/role/create', roleBodyCreate);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);

            const body = await response.json<{
                data: { id: string }
            }>();
            testRoleId = body.data.id;

            expect(testRoleId).toBeDefined();
        });

        it('GET /role/:id - should return an role by ID', async () => {
            const response = await testClient.get(`/v1/role/getrole/${testRoleId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('PATCH /role/:id - should update a role', async () => {
            const response = await testClient.patch(
                `/v1/role/${testRoleId}`,
                roleBodyUpdate
            );
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        it('DELETE /role/:id - should delete a role', async () => {
            const response = await testClient.delete(`/v1/role/${testRoleId}`);
            expect(response.status).toBe(HttpStatusEnum.HTTP_200_OK);
        });

        afterAll(async () => {

        });
    })
}