module.exports = function (app){
    app.post('/add_pedidos', function (req, res) {

     let connection = app.app.config.database();
     let query = app.app.models.modelQueries; 
   

     let conteudo = { //OBJETO DO MÉTODO POST
          nome: req.body.nome_cliente,
          endereco: req.body.endereco,
          telefone: req.body.telefone,
          produto: req.body.produto,
          valor: req.body.valor,
          qtd: req.body.qtd
        }
    
       query.query_cadastrarPedido(connection, conteudo, function(error, results){ //QUERY 
       console.log(error)
   
       res.send("teste" + conteudo.nome + conteudo.endereco)
   
     });
   
    })
     }