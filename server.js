//Express Server
const { application } = require('express')
const express = require ('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Middleware
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//Routes
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})


//Breads
const breadsController = require ('./controllers/bread_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log('Listening at port', PORT)
})