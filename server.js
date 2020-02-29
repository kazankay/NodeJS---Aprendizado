const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o APP
const app =  express();
app.use(express.json());
app.use(cors());

//Instando o DB
// Como não fiz a instalação do Docker seguindo o vídeo, 
// precisei passar o IP e porta que foi gerado pelo Toolbox
mongoose.connect('mongodb://192.168.99.100:32768/nodepai', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);