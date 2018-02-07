var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

//consign faz um scan na aplicação e inclui os modulos dentro do servidor(app)
consign()
    .include('app/routes')
    .then('config/dbConnection.js') //neste caso é preciso apontar a extensão
    .into(app); 

module.exports = app;