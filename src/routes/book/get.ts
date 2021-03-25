import { RouteShorthandOptions } from 'fastify'
import getAllBooksResponse from 'schemas/dapi.getallbooksresponse.json'
import baseParams from 'schemas/dapi.baseparams.json'
import RouteTags from 'types/enums/RouteTags'
import { getAllBooks } from 'utils/book'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'getAllBooks',
    // @ts-ignore
    tags: [RouteTags.Books],
    params: baseParams,
    response: {
      200: getAllBooksResponse,
      '4XX': errorResponseSchema,
    },
  },

  preValidation: [],
  preHandler: [],
}

//
// Handler

export const handler = (request, reply) => {
  const allBooks = getAllBooks()
  reply.send({ books: allBooks } as DAPI.GetAllBooksResponse)
}

export default (server) => server.get('/', opts, handler)
