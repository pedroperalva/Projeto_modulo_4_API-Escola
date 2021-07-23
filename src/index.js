const app = require('./app')

//executa as requisição vindas da porta 3032
app.listen(3032, () => {
    console.log(`Server is running at http://localhost:3032`)
})