import { Roles } from '@prisma/client';

export interface UserFind {
  name: string;
  role: Roles;
  verified: boolean;
}
