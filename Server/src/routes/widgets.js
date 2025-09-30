const express = require('express')
const { getGmailWidgetPreview } = require('../services/gmail')

const router = express.Router()

router.get('/gmail', async (req, res, next) => {
  try {
    const payload = await getGmailWidgetPreview()
    res.json(payload)
  } catch (error) {
    next(error)
  }
})

module.exports = router
