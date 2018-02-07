var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão estabelecida com o bd');
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Flp@123',
        database: 'portal_noticias'
    });
}
module.exports = function(){
    console.log('O autoload carregou o modulo de conexão com o bd');
    return connMySQL;
};