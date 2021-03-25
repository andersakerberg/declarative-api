import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import GenericResponse from 'schemas/dapi.genericresponse.json'
import baseWineParams from 'schemas/dapi.basewineparams.json'

//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'updateWine',
    // @ts-ignore
    tags: [RouteTags.Wine],
    params: baseWineParams,
    response: {
      200: GenericResponse,
      '4XX': errorResponseSchema,
    },
  },

  preValidation: [],
  preHandler: [],
}

//
// Handler

export const handler = (request, reply) => {
  reply.send('OK')
}

export default (server) => server.put('/:wine', opts, handler)
