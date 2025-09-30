require('dotenv').config()
const { app } = require('./app')
const { env } = require('./config/env')

const server = app.listen(env.port, () => {
  const url = `http://localhost:${env.port}`
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${url}`)
})

const gracefulShutdown = () => {
  server.close(() => process.exit(0))
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
