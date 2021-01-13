const express = require("express")
const app = express()
const api = require('./api')

const morgan = require('morgan')
const bodyParser = require('body-parser')




app.set('port' , (process.env.PORT || 8081))


