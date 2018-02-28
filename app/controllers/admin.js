module.exports.form_add_noticia = function(app, req, res){
  res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(app, req, res){
  var noticia = req.body;

  //validações
  req.assert('titulo','Título obrigatório').notEmpty();
  req.assert('resumo','Resumo obrigatório').notEmpty();
  req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
  req.assert('autor','Autor obrigatório').notEmpty();
  //isDate() foi retirado do express-validator, solução foi usar isISO8601.
  req.assert('data_noticia','Data obrigatória').notEmpty().isISO8601({format: 'YYYY-MM-DD'});
  req.assert('noticia','Notícia obrigatória').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
    return;
  }
  //conexão
  var con = app.config.dbConnection();
  //model
  var noticiasModel = new app.app.models.NoticiasDAO(con);
  //salvarNoticia
  noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect('/noticias'); //direciona para a página de noticias e evita um f5 do usuário duplicando o envio do formulário
  });
}
