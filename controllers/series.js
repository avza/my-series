const labels = [
    { id: 'to-watch', name: 'Para assistir' },
    { id: 'watching', name: 'Assistindo' },
    { id: 'watched', name: 'Assistido' }
]

const index = ({ Serie }, req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs, labels })
    })
}
const newSerie = ({ Serie }, req, res) => {
    const serie = new Serie(req.body)
    serie.save(() => {
        res.redirect('/series')
    })
}
const newForm = (req, res) => {
    res.render('series/new')
}
const deleteOne = ({ Serie }, req, res) => {
    Serie.remove({
        _id: req.params.id
    }, (err) => {
        res.redirect('/series')
    })
}
const editSerie = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        serie.name = req.body.name
        serie.status = req.body.status
        serie.save()
        res.redirect('/series')
    })
}
const editForm = ({ Serie }, req, res) => {
    Serie.findOne({
        _id: req.params.id
    }, (err, serie) => {
        res.render('series/edit', { serie, labels })
    })
}

module.exports = {
    index, newSerie, newForm, deleteOne, editForm, editSerie
}
