const express = require('express')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.send('🌊 Server is on!')
})

app.listen(PORT, ()=>{
    console.log(`🌊 Server is started on port ${PORT}`)
})