const index = (req, res) => res.render('series/index')
const newSerie = (req, res) => res.render('series/new')

module.exports = {
    index, newSerie
}
