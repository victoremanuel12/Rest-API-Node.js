require('dotenv').config({path:'variaveis.env'})
const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')
const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))
server.use('/api',routes)// todos os prefixos do projeto terá esse início 

server.listen(process.env.PORT,() => {
   console.log(`Servidor rodando  na porta: http://localhost${process.env.PORT}`)
})

