// role.ts
export const userRole = {
  SUPERADMIN: 1,
  ADMIN: 2,
  STAFF: 3,
  USER: 4,
};

export type UserRole = keyof typeof userRole; // "SUPERADMIN" | "ADMIN" | "STAFF" | "USER"