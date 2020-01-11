const express = require('express')
const seriesController = require('../controllers/series')

const router = express.Router()

const Serie = require('../models/series')
const models = {
    Serie
}

router.get('/', seriesController.index.bind(null, models))

router.get('/new', seriesController.newForm)
router.post('/new', seriesController.newSerie.bind(null, models))

router.get('/delete/:id', seriesController.deleteOne.bind(null, models))

router.get('/update/:id', seriesController.editForm.bind(null, models))
router.post('/update/:id', seriesController.editSerie.bind(null, models))

router.get('/info/:id', seriesController.info.bind(null, models))
router.post('/info/:id', seriesController.addComment.bind(null, models))

module.exports = router
