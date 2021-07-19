//requires
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//importar o controller
const controller = require('../controllers/controller-alunos')
controller(app)

//executa as requisição vindas da porta 3032
app.listen(3032, () => {
    console.log(`Server is running at http://localhost:3032`)
})