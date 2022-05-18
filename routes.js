var express = require('express')
var router = express.Router()

var movies = require('./controlllers/movie')

router.use('/movies',movies)

module.exports = router;