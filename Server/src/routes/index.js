const express = require('express')
const widgets = require('./widgets')

const router = express.Router()

router.get('/healthz', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

router.use('/widgets', widgets)

module.exports = router
