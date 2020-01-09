const Serie = require('../models/series')

const index = (req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs })
    })
}
const newSerie = (req, res) => {
    res.render('series/new')
}

module.exports = {
    index, newSerie
}
