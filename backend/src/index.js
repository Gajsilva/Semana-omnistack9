const express = require('express');
const mongoose =require('mongoose')
const cors = require('cors')
const path = require('path')
const porta = 3337


const routes = require('./routes')


const app = express();


mongoose.connect('mongodb+srv://semana:semana@semana9.vtlce7c.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser:true, 
    useUnifiedTopology:true,
})


app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')));
app.use(routes);


app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`)
} );