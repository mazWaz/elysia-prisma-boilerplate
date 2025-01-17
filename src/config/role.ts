import { Role } from '@prisma/client';

export enum userRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPERADMIN = 'SUPERADMIN'
}

const allRoles = {
  [Role.USER]: [userRole.USER],
  [Role.ADMIN]: [userRole.ADMIN],
  [Role.SUPERADMIN]: [userRole.SUPERADMIN, userRole.ADMIN, userRole.USER]
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
