module.exports = function(app){
    app.get('/form_add_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    //método de envio do formulario via post, usar "app.post"
    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;


        //conexão
        var con = app.config.dbConnection(); 
        //model
        var noticiasModel = app.app.models.noticiasModel;
        //salvarNoticia
        noticiasModel.salvarNoticia(noticia, con, function(error, result){
            res.redirect('/noticias'); //direciona para a página de noticias e evita um f5 do usuário duplicando o envio do formulário
        });
    });
};
  