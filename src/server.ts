import 'app-module-path/register'
import 'dotenv/config'
import app from 'app'

app.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  app.log.info(app.printRoutes())
  console.log(`Server listening at ${address}`)
})
