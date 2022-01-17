// DEPENDENCIES //
const express = require('express')
const methodOverride = require('method-override')

const app = express()
const PORT = 3000

// CONFIG //
app.set('view engine', 'ejs')

// MIDDLEWARE //
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
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

// NEW ROUTE //
app.get('/pokemon/new', (req,res)=>{
    res.render('new.ejs')
})

// EDIT ROUTE //
app.get('/pokemon/:id/edit', (req,res)=>{
    const pokeId = pokemon[req.params.id]
    res.render('edit.ejs', {
        id: req.params.id,
        pokeId: pokeId
    })
})

// SHOW ROUTE //
app.get('/pokemon/:id', (req,res)=>{
    res.render('show.ejs', {
        id: req.params.id,
        poke: pokemon[req.params.id]
    })
})

// CREATE ROUTE //
app.post('/pokemon', (req,res)=>{
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

// DESTROY ROUTE //
app.delete('/pokemon/:id', (req,res)=>{
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon')
    // res.send('Delete Route Linked')
})

// PUT ROUTE //
app.put('/pokemon/:id', (req,res)=>{
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon/' +req.params.id)
})

// START SERVER //
app.listen(PORT, ()=>{
    console.log(`🌊 Server is started on port ${PORT}`)
})

module.exports = app