module.exports = function(app){
    
    this.getNoticias = function(con, callback){
        con.query('select * from noticias', callback);
    };

    this.getNoticia = function(con, callback){
        con.query('select * from noticias where id_noticia = 2', callback);
    }

    return this;
};