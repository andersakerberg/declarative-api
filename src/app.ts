import fastify, { FastifyInstance } from 'fastify'
import fastifyCaching from 'fastify-caching'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import swagger from 'fastify-oas'
import routes from 'routes/routes'
import { v4 } from 'uuid'
import { getSwaggerDefinitions } from 'swagger/getSwaggerDefinitions'
import RouteTags from 'types/enums/RouteTags'

const app: FastifyInstance = fastify({
  logger: {
    prettyPrint: true,
    level: 'debug',
    serializers: {
      res(reply) {
        // The default
        return {
          statusCode: reply.statusCode,
        }
      },
      req(request) {
        return {
          method: request.method,
          url: request.url,
          path: request['path'],
          parameters: request['params'],
        }
      },
    },
  },
  genReqId: v4,
  ajv: {
    customOptions: {
      strictKeywords: true,
      removeAdditional: false,
    },
  },
})

app.register(helmet)

app.addHook('preHandler', (req, reply, next) => {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed  request body')
  }
  next()
})

app.addHook('onSend', (request, reply, payload: string, next) => {
  if (payload && payload.length > 0) {
    try {
      request.log.info({ body: JSON.parse(payload) }, 'parsed response body')
    } catch (error) {
      request.log.info({ body: 'Could not log response' }, error.message)
    }
  }
  next()
})

app.register(fastifyCaching)
app.register(cors, {
  methods: ['POST', 'DELETE', 'PATCH', 'GET', 'PUT'],
  credentials: true,
  origin: '*',
})

app.register(swagger, {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    basePath: '/',
    info: {
      title: 'DIPA :-) core swagger',
      version: '0.0.0',
      description: 'Our api for DAPI solution',
    },

    host: '127.0.0.1:8080',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: getSwaggerDefinitions(),
    securityDefinitions: {
      JWT: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'jwt',
      },
    },
    tags: [
      { name: RouteTags.Books },
      { name: RouteTags.Beer },
      { name: RouteTags.Wine }
    ],
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
})

app.register(routes)

export default app
