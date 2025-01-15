import { Elysia } from 'elysia';
import router from './routes/v1';
import { ErrorMessages } from './middelware/errorHandler';
import customResponse from './middelware/customResponse';
import swagger from '@elysiajs/swagger';
import config from './config/config';
import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
import { jwt } from '@elysiajs/jwt';
import { Logestic } from 'logestic';
import { ip } from 'elysia-ip';
import { sessionDerive } from './middelware/session.derive';
import { checkMaintenanceMode } from './middelware/lifecycleHandlers';
import { bootLogger, gracefulShutdown } from './utils/systemLogger';
import { rateLimit } from 'elysia-rate-limit';
import bearer from '@elysiajs/bearer';
import moment from 'moment';

const app = new Elysia({})
  //Server State
  .state('maintenanceMode', config.maintenanceMode === 'true' || false)
  .state('timezone', String(Bun.env.TZ || 'Asia/Jakarta'))
  .onError(({ code, error, set }: any) => ErrorMessages(code, error, set)) // General Error catching system

  /* EXTENSION */

  // Fancy logs

  //Swagger
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
        components: {
          securitySchemes: {
            JwtAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT'
            }
          }
        }
      },
      swaggerOptions: {
        persistAuthorization: true
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

  // JWT
  .use(
    jwt({
      name: 'elysia_jwt',
      secret: config.jwt.secret!,
      exp: moment().add(config.jwt.accessExpirationMinutes, 'minutes').unix()
    })
  )

  // Get IP of client and add to context
  .use(
    ip({
      checkHeaders: ['X-Forwarded-For', 'X-Real-IP', 'requestIP', 'Authentication-Method']
    })
  )

  .use(rateLimit({ max: config.env === 'production' ? 8 : 15 }))

  .use(bearer())

  //Life Cycle
  .derive(sessionDerive)
  .onBeforeHandle([checkMaintenanceMode])
  .mapResponse(customResponse)
  .onStop(gracefulShutdown)
  .use(Logestic.preset('fancy'))

  //Routes
  .use(router);
app.listen(config.port, bootLogger);

console.log(`🦊 Elysia is running at http://${config.host}:${config.port}`);
