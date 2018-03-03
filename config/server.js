var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

//passar o body-parser parametrizando como irá tratar os formulários: urlencoded com parametros em json
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
app.use(express.static('./app/public'));

//consign faz um scan na aplicação e inclui os modulos dentro do servidor(app)
consign()
    .include('app/routes')
    .then('config/dbConnection.js') //neste caso é preciso apontar a extensão
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
