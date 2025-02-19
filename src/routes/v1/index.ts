import Elysia from 'elysia';
import config from '../../config/config';
import { authRoute } from './auth.route';
import { userRoute } from './user.route';
import { carRoute } from './car.route';
import { usercarRoute } from './usercar.route';
import { locationRoute } from './location.route';
import { userAddressRoute } from './address.route';
import swagger from '@elysiajs/swagger';
import { rootRoute } from './root.route';

const router = new Elysia({
  prefix: '/v1',
  name: config.server.name,
  detail: { description: `${config.server.name} Server API` }
})
  .use(rootRoute)
  .use(authRoute)
  .use(userRoute)
  .use(carRoute)
  .use(usercarRoute)
  .use(locationRoute)
  .use(userAddressRoute);

const routerIndex = new Elysia();

export default router;
