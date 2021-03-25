import get from './get'
import put from './put'
import post from './post'
import deleteRoute from './delete'

export default (server, opts, done) => {
  get(server)
  put(server)
  post(server)
  deleteRoute(server)
  done()
}
