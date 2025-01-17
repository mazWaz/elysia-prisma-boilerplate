import Elysia from 'elysia';
import config from '../../config/config';
import { authRoute } from './auth.route';
import { userRoute } from './user.route';
import { carRoute } from './car.route';
import swagger from '@elysiajs/swagger';
import { rootRoute } from './root.route';

const router = new Elysia({
  prefix: '/v1',
  name: config.server.name,
  detail: { description: `${config.server.name} Server API` }
})
  .use(rootRoute)
  .use(authRoute) // Router Auth
  .use(userRoute) // Router User;
  .use(carRoute); // Router Car;

const routerIndex = new Elysia();

export default router;
