const Serie = require('../models/series')

const index = (req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs })
    })
}
const newSerie = (req, res) => {
    const serie = new Serie({
        name: 'Van Helsing',
        status: 'watching'
    })
    serie.save(() => console.log('saved'))
    res.render('series/new')
}

module.exports = {
    index, newSerie
}
