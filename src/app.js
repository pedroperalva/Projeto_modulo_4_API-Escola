//requires
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//importar o controller
const controller = require('./controllers/controller-alunos')
controller(app)

module.exports = app