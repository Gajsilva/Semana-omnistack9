const express = require('express');

const app = express();
const porta = 3335

app.get('/', (req,res) => {
    return res.json('Hello')
})

app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`)
} )