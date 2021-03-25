import { RouteShorthandOptions } from 'fastify'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import GenericResponse from 'schemas/dapi.genericresponse.json'
import baseBookParams from 'schemas/dapi.basebookparams.json'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'deleteBook',
    // @ts-ignore
    tags: [RouteTags.Books],
    params: baseBookParams,
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

export default (server) => server.delete('/:book', opts, handler)
