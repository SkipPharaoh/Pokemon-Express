// DEPENDENCIES //
const express = require('express')

const app = express()
const PORT = 3000

// CONFIG //
app.set('view engine', 'ejs')

// DATABASE MODELS //
const pokemon = require('./models/pokemon')

// INDEX ROUTE
app.get('/', (req,res)=>{
    res.send('🌊 Server is on!')
})
app.get('/pokemon', (req,res)=>{
    res.send(pokemon)
})

app.listen(PORT, ()=>{
    console.log(`🌊 Server is started on port ${PORT}`)
})