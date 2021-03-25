import { RouteShorthandOptions } from 'fastify'
import getAllBeersResponse from 'schemas/dapi.getallbeersresponse.json'
import baseParams from 'schemas/dapi.baseparams.json'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import RouteTags from 'types/enums/RouteTags'
import { getAllBeers } from 'utils/beer'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'getAllBeers',
    // @ts-ignore
    tags: [RouteTags.Beer],
    params: baseParams,
    response: {
      200: getAllBeersResponse,
      '4XX': errorResponseSchema,
    },
  },

  preValidation: [],
  preHandler: [],
}

//
// Handler

export const handler = (request, reply) => {
  const allBeers = getAllBeers()
  reply.send({ beers: allBeers } as DAPI.GetAllBeersResponse)
}

export default (server) => server.get('/', opts, handler)
