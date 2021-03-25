import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import baseParams from 'schemas/dapi.baseparams.json'
import GenericResponse from 'schemas/dapi.genericresponse.json'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'createWine',
    // @ts-ignore
    tags: [RouteTags.Wine],
    params: baseParams,
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

export default (server) => server.post('/', opts, handler)
