const express = require('express')
const seriesController = require('../controllers/series')

const router = express.Router()

router.get('/', seriesController.index)
router.get('/new', seriesController.newSerie)

module.exports = router
