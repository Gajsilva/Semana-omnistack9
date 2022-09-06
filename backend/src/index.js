const express = require('express');
const mongoose =require('mongoose')
const routes = require('./routes')
const app = express();
const porta = 3336

mongoose.connect('mongodb+srv://semana:semana@semana9.vtlce7c.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser:true, 
    useUnifiedTopology:true,
})

app.use(express.json())
app.use(routes);


app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`)
} )