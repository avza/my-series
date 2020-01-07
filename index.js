const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost/my-series'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// process request body
app.use(bodyParser.urlencoded({ extended: true }))

// assets
app.use(express.static('public'))

// view engine - EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('ok'))

mongoose
    .connect(mongo, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(port, () => console.log('My series listening on port ' + port))
    })
    .catch(e => {
        console.log(e)
    })
