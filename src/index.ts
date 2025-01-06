import { Elysia } from 'elysia';
import router from './routes/v1';
import { ErrorMessages } from './middelware/errorHandler';
import customResponse from './middelware/customResponse';
import swagger from '@elysiajs/swagger';
import config from './config/config';
import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
import { jwt } from '@elysiajs/jwt';

const app = new Elysia({})
  //Server State
  .state('maintenanceMode', config.maintenanceMode === 'true' || false)
  .state('timezone', String(Bun.env.TZ || 'Asia/Jakarta'))

  //Development Plugins
  .use(
    await swagger({
      path: '/v1/doc',
      autoDarkMode: true,
      documentation: {
        info: {
          title: `${config.server.name}`,
          version: `${config.server.version}`,
          description: `Server API for ${config.server.name}`
        },
        tags: [
          { name: 'App', description: 'General endpoints' },
          { name: 'Auth', description: 'Authentication endpoints' }
        ]
      }
    })
  )
  // Cors security
  .use(
    cors({
      // origin: ['http://localhost', 'http://localhost:5173'],
      methods: ['OPTIONS', 'GET', 'PUT', 'POST', 'PATCH'],
      credentials: true,
      origin: /localhost.*/,
      // origin: (ctx) => ctx.headers.get('Origin'),
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Credentials',
        'Origin',
        'Host',
        'os',
        'ipCountry',
        'X-Forwarded-For',
        'X-Real-IP',
        'X-Custom-Header',
        'requestIP',
        'Authentication-Method'
      ]
    })
  )

  // Helmet security (might conflict with swagger)
  .use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src-elem': ['https://cdn.jsdelivr.net/'],
          'script-src': ["'self'", 'https://cdn.jsdelivr.net/']
        }
      }
    })
  )

  .use(
    jwt({
      name: 'elysia_jwt',
      secret: config.jwt.secret!,
      exp: `${config.jwt.refreshExpirationDays}d`
    })
  )

  //Life Cycle
  .onError(({ code, error, set }: any) => ErrorMessages(code, error, set)) // General Error catching system
  .mapResponse(customResponse)

  //Routes
  .get('/', 'elysia')
  .use(router)
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
