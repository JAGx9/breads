const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const Bread = require('../models/bread.js')


//Index
breads.get('/', (req,res) => {
    res.render('Index',
        {
            breads: Bread,
            title:'Index Page'
        }
    )
    //res.send('This the index at /breads')
})

//Create
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten = 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })

//New
breads.get('/new', (req, res) => {
    res.render('new')
})


// Show
breads.get('/:arrayIndex', (req,res) => {
    if(Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })
  } else {
      res.send('404')
  }
})

//Delete
breads.delete('/:indexArray', (req,res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})




module.exports = breads