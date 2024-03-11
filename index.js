const express = require('express')
const app = express()
const port = 3000

app.get('/he',(req,res)=>{
    res.send('¡Hola Mundo! SOY  EL SERVIDOR')
    
})

app.listen(port, () => {
    console.log('La aplicacion se esta ejecutanado en el puerto'+ port)
})