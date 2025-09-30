const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const { env } = require('./config/env')

const app = express()

app.set('trust proxy', 1)
app.use(helmet())
app.use(cors({
  origin: env.clientOrigin,
  credentials: true,
}))
app.use(express.json({ limit: '1mb' }))
app.use(cookieParser())

app.use('/api', routes)

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err.message ?? 'Internal Server Error' })
})

module.exports = { app }
