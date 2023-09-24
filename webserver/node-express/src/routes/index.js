const express = require('express')
const router = express.Router()
const debug = require('debug')('src')

router.get('/', function(req, res, next) {
  debug('Kopfzeilen: ', req.headers)
  res.render('index', { title: 'Express' })
})

module.exports = router
