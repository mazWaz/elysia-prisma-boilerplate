import { HttpStatusEnum } from '../utils/httpStatusCode';

export const checkMaintenanceMode = ({ set, store }: any) => {
  if (store.maintenanceMode) {
    console.log('Maintenance Mode: ON');
    set.status = HttpStatusEnum.HTTP_423_LOCKED;
    return {
      message: 'System currently undergoing maintenance',
      note: 'Admin has locked this application'
    };
  }
};
