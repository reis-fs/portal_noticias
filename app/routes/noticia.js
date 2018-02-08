module.exports = function(app){
    
    app.get('/noticia', function(req, res){

        var con = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    });
};