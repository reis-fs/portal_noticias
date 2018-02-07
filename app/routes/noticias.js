module.exports = function(app){

    app.get('/noticias', function(req, res){
        
        var mysql = require('mysql');
        
        var con = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'Flp@123',
            database: 'portal_noticias'
        });

        con.query('select * from noticias',function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });  
    });
};