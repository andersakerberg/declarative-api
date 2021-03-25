/* eslint-disable @typescript-eslint/no-unused-vars */

import bookRoutes from './books/bookRoutes'
import wineRoutes from './wine/wineRoutes'
import beerRoutes from './beer/beerRoutes'

export default (app, opts, done) => {
  app.register(bookRoutes, { prefix: ':year/book' })
  app.register(wineRoutes, { prefix: ':year/wine' })
  app.register(beerRoutes, { prefix: ':year/beer' })

  done()
}
