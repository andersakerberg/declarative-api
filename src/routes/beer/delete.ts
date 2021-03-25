import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import baseBeerParams from 'schemas/dapi.basebeerparams.json'
import GenericResponse from 'schemas/dapi.genericresponse.json'

//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'deleteBeer',
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

export default (server) => server.delete('/:beer', opts, handler)
