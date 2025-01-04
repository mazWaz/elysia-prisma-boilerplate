import { Role } from '@prisma/client';

export interface UserFind {
  name: string;
  role: Role;
  verified: boolean;
}
