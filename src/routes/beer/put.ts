import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import GenericResponse from 'schemas/dapi.genericresponse.json'
import baseBeerParams from 'schemas/dapi.basebeerparams.json'

//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'updateBeer',
    // @ts-ignore
    tags: [RouteTags.Beer],
    params: baseBeerParams,
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

export default (server) => server.put('/:beer', opts, handler)
