import { RouteShorthandOptions } from 'fastify'
import getAllWinesResponse from 'schemas/dapi.getallwinesresponse.json'

import RouteTags from 'types/enums/RouteTags'
import baseParams from 'schemas/dapi.baseparams.json'
import errorResponseSchema from 'schemas/dapi.errorresponse.json'
import { getAllWines } from 'utils/wine'
//
// Route options

export const opts: RouteShorthandOptions = {
  schema: {
    // @ts-ignore
    operationId: 'getAllWines',
    // @ts-ignore
    tags: [RouteTags.Wine],
    params: baseParams,
    response: {
      200: getAllWinesResponse,
      '4XX': errorResponseSchema,
    },
  },

  preValidation: [],
  preHandler: [],
}

//
// Handler

export const handler = (request, reply) => {
  const allWines = getAllWines()
  reply.send({ wines: allWines } as DAPI.GetAllWinesResponse)
}

export default (server) => server.get('/', opts, handler)
