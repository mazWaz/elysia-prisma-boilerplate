import { Role } from '@prisma/client';

export enum userRole {
  GET_USER = 'getUser',
  MANAGE_USER = 'manageUser',
  GET_PROFILE = 'getProfile'
}

const allRoles = {
  [Role.USER]: [userRole.GET_PROFILE],
  [Role.ADMIN]: [userRole.GET_USER, userRole.MANAGE_USER, userRole.GET_PROFILE],
  [Role.SUPERADMIN]: [userRole.GET_USER, userRole.MANAGE_USER, userRole.GET_PROFILE]
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
