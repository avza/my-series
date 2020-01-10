const express = require('express')
const seriesController = require('../controllers/series')

const router = express.Router()

const Serie = require('../models/series')
const models = {
    Serie
}

router.get('/', seriesController.index.bind(null, models))
router.get('/new', seriesController.newSerie.bind(null, models))

module.exports = router
