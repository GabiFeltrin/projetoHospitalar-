const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const connection = require ('./models/database')

connection
    .authenticate()
    .then(() => {
        console.log('sucesso')
    })
    .catch((msgError) => {
        console.log(msgError)
    })
    app.listen(8080,() => {
        console.log('rodando')
    })