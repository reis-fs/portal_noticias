module.exports.index = function(app, req, res){

  var con = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO(con);

  noticiasModel.get5UltimasNoticias(function(error, result){
    res.render("home/index",{noticias : result});
  });
}
