import config from '../../config/config';
import { HttpStatusEnum } from '../../utils/httpStatusCode';
import { catchAsync } from './../../utils/catchAsync';
export class RootController {
  constructor() {}

  init = catchAsync(async ({ set, store }: any) => {
    const spec = {
      name: config.server.name,
      version: config.server.version,
      maintenance: store.maintenanceMode ?? 'Unavailable',
      timezone: store.timezone,
      creator: config.server.author,
      host: 'Hosting By Ramirez Corp'
    };

    set.status = HttpStatusEnum.HTTP_200_OK;
    return { data: spec, message: `All Systems GO!` };
  });

  helloWorld = catchAsync(async ({ set, user, session, request: { headers } }: any) => {
    console.log('User: ', user);
    console.log('Session: ', session);
    console.log('ProfileID: ', user?.profileId ?? null);
    console.log(headers.get('accept'));

    return {
      message: `Welcome to the ${config.server.name} Server! Version ${config.server.version}`
    };
  });

  helloTime = catchAsync(async ({ params, store: { timezone } }: any) => {
    const currentHour = new Date().getHours();

    function getGreeting(): string {
      if (currentHour >= 5 && currentHour < 12) {
        return 'morning';
      } else if (currentHour >= 12 && currentHour < 17) {
        return 'afternoon';
      } else if (currentHour >= 17 && currentHour < 19) {
        return 'evening';
      } else {
        return 'night';
      }
    }

    try {
      return {
        message: `It's a beautiful ${getGreeting()} in ${timezone ?? 'your area'} isn't it ${params?.name || ''}?`
      };
    } catch (error) {
      console.error(error);

      return { message: `Error occurred` };
    }
  });

  health = catchAsync(async ({ store }: any) => {
    const spec = {
      'Server Name': config.server.name,
      Version: config.server.version,
      'Maintenance Mode': store.maintenanceMode ?? 'Unavailable',
      Timezone: store.timezone,
      Creator: config.server.author
    };

    return { data: spec, message: `All Systems GO!` };
  });
}
