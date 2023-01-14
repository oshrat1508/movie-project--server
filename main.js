const express  = require('express')
const cors = require('cors')
require("./config/config");

const movie_router =require('./router/movieRouter')
const users =require('./router/usersRouter')



const app = express()
app.use(cors())
app.use(express.json())

app.use('/chillTime',movie_router)
app.use('/',users)

app.listen(8000 , ()=>console.log('listen to port 8000'))

