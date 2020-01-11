const labels = [
    { id: 'to-watch', name: 'Para assistir' },
    { id: 'watching', name: 'Assistindo' },
    { id: 'watched', name: 'Assistido' }
]

const index = async ({ Serie }, req, res) => {
    const series = await Serie.find({})
    res.render('series/index', { series, labels })
}
const newSerie = async ({ Serie }, req, res) => {
    const serie = new Serie(req.body)
    try {
        await serie.save()
        res.redirect('/series')
    } catch (e) {
        res.render('series/new', {
            errors: Object.keys(e.errors)
        })
    }
}
const newForm = (req, res) => {
    res.render('series/new')
}
const deleteOne = async ({ Serie }, req, res) => {
    await Serie.remove({ _id: req.params.id })
    res.redirect('/series')
}
const editSerie = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    serie.name = req.body.name
    serie.status = req.body.status

    try {
        await serie.save()
        res.redirect('/series')
    } catch (e) {
        res.render('series/edit', { serie, labels, errors: Object.keys(e.errors) })
    }
}
const editForm = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    res.render('series/edit', { serie, labels })
}

module.exports = {
    index, newSerie, newForm, deleteOne, editForm, editSerie
}
