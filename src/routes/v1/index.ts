import Elysia from 'elysia';
import config from '../../config/config';
import { authRoute } from './auth.route';
import { userRoute } from './user.route';
import { carRoute } from './car.route';
import { usercarRoute } from './usercar.route';
import { locationRoute } from './location.route';
import { userAddressRoute } from './address.route';
import { roleRoute } from './role.route';
import { departmentRoute } from './department.route';
import swagger from '@elysiajs/swagger';
import { rootRoute } from './root.route';

const router = new Elysia({
  prefix: '/v1',
  name: config.server.name,
  detail: { description: `${config.server.name} Server API` }
})
  .use(rootRoute)
  .use(authRoute)
  .use(roleRoute)
  .use(departmentRoute)
  .use(userRoute)
  .use(userAddressRoute)
  .use(carRoute)
  .use(usercarRoute)
  .use(locationRoute);

const routerIndex = new Elysia();

export default router;
