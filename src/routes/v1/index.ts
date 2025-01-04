import Elysia from 'elysia';
import userRoute from './user.route';

const router = new Elysia({ prefix: '/v1' }).use(userRoute);

export default router;
