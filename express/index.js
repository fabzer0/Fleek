require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const getPeople = require('../src/controllers/people.controller')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('ci with travis')
})

app.get('/people', getPeople)

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
})

module.exports = server
