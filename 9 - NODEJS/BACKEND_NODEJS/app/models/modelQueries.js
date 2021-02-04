module.exports = function(){

  this.query_produtos = function (connection, callback){
    connection.query("select * from produto", callback);
  }
  this.query_categorias = function (connection, callback){
    connection.query("SELECT DISTINCT categoria from produto", callback);
  }
  this.query_lojas = function (connection, callback){
    connection.query("select * from lojas", callback);
  }
  this.query_cadastrarPedido = function (connection, conteudo, callback){
    connection.query(`insert into pedido values(default, '${conteudo.nome}' , '${conteudo.endereco}', '${conteudo.telefone}', '${conteudo.produto}', ${conteudo.valor}, ${conteudo.qtd})`, callback);
  }

  return this;
}