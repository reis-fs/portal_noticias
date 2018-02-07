module.exports = function(app){
    
    
    app.get('/noticias', function(req, res){

        var con = app.config.dbConnection(); 

        con.query('select * from noticias',function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });  
    }); 
};