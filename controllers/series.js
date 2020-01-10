const index = ({ Serie }, req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs })
    })
}
const newSerie = ({ Serie }, req, res) => {
    res.render('series/new')
}

module.exports = {
    index, newSerie
}
