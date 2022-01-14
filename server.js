// DEPENDENCIES //
const express = require('express')

const app = express()
const PORT = 3000

// CONFIG //
app.set('view engine', 'ejs')
app.use('/views', express.static('views'))

// DATABASE MODELS //
const pokemon = require('./models/pokemon')

// INDEX ROUTE //
app.get('/', (req,res)=>{
    res.send('🌊 Server is on!')
})
app.get('/pokemon', (req,res)=>{
    res.render('index.ejs', {
        poke: pokemon
    })
})

// SHOW ROUTE //
app.get('/pokemon/:id', (req,res)=>{
    res.render('show.ejs', {
        poke: pokemon[req.params.id]
    })
})

// START SERVER //
app.listen(PORT, ()=>{
    console.log(`🌊 Server is started on port ${PORT}`)
})