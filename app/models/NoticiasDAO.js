function NoticiasDAO(con){
    this._con = con;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._con.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(idNoticia, callback){
    console.log(idNoticia.id_noticia);
    this._con.query('select * from noticias where id_noticia = ' + idNoticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._con.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._con.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
};
