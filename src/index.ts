import { Elysia } from 'elysia';
import router from './routes/v1';
import { ErrorMessages } from './middelware/errorHandler';

const app = new Elysia()
  .onError(({ code, error, set }: any) => ErrorMessages(code, error, set)) // General Error catching system
  .get('/', 'elysia')
  .use(router)
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
