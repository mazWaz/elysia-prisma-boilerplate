import Elysia from 'elysia';
import config from '../../config/config';
import { authRoute } from './auth.route';
import { userRoute } from './user.route';
import swagger from '@elysiajs/swagger';
import { rootRoute } from './root.route';

const router = new Elysia({
  name: config.server.name,
  detail: { description: `${config.server.name} Server API` }
})
  .use(rootRoute)
  .group(
    '/user',
    (app) =>
      app
        .use(authRoute) // Router Auth
        .use(userRoute) // Router User
  );

const routerIndex = new Elysia();

export default router;
