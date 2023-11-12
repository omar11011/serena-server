const cors = require('cors')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./routes'))

module.exports = app