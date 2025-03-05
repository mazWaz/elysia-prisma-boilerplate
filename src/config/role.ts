// config/role.ts
export type userRole =
  | 'manageEverything'
  | 'manageUsers'
  | 'manageContent'
  | 'viewReports'
  | 'manageTickets'
  | 'viewProfile';

export const roleRights = new Map<string, userRole[]>([
  ['SUPERADMIN', ['manageEverything']],
  ['ADMIN', ['manageUsers', 'manageContent', 'viewReports', 'manageTickets', 'viewProfile']], // added more rights for ADMIN for example
  ['STAFF', ['manageContent', 'viewProfile', 'manageTickets']], // added STAFF role and some rights
  ['SUPERVISOR', ['viewReports', 'viewProfile']],
  ['SUPPORT', ['manageTickets', 'viewProfile']],
  ['USER', ['viewProfile']],
]);