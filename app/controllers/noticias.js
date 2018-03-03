module.exports.noticias = function (app, req, res){
  var con = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO(con);

  noticiasModel.getNoticias(function(error, result){
      res.render("noticias/noticias", {noticias : result});
  });
}

module.exports.noticia = function (app, req, res){
  var con = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO(con);

  var idNoticia = req.query;

  noticiasModel.getNoticia(idNoticia, function(error, result){
      res.render("noticias/noticia", {noticia : result});
  });
}
