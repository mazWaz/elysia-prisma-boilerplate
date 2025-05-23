import Elysia, { t } from 'elysia';
import { RootController } from '../../modul/root/root.controller';
import { swaggerDetails } from '../../utils/responseHelper';
import { checkAuth } from '../../middelware/authCheck';

const root = new RootController();

export const rootRoute = new Elysia({
  detail: { description: 'Root endpoints', tags: ['1.Root'] }
})
  .get('/init', root.init, {
    detail: swaggerDetails('Initialize App', 'Returns data beneficial to initialization')
  })
  .get('/', root.helloWorld, {
    detail: swaggerDetails('Hello World')
  })
  .get('/hello', root.helloTime, {
    detail: swaggerDetails('Timezone Greeting')
  })
  .get('/hello/:name', root.helloTime, {
    detail: swaggerDetails('Timezone Greeting + Name'),
    params: t.Object({ name: t.String() })
  })
  .get('/health', root.health, {
    detail: swaggerDetails('System Health', 'Check system health')
  });
