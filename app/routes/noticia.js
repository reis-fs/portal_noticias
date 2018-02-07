module.exports = function(app){
    
    app.get('/noticia', function(req, res){

        var con = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(con, function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    });
};