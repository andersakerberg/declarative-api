import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import GenericResponse from 'schemas/dapi.genericresponse.json'
import RouteTags from 'types/enums/RouteTags'
import baseWineParams from 'schemas/dapi.basewineparams.json'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'deleteWine',
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

export default (server) => server.delete('/:wine', opts, handler)
