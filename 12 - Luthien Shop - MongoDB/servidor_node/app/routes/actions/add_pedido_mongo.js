module.exports = function (app){
  app.post('/pedidoadd', function (req, res) {
    let cont = { //OBJETO DO MÉTODO POST
      nome: req.body.nome_cliente,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      produto: req.body.produto,
      valor: req.body.valor,
      qtd: req.body.qtd
    }

    var db = require("../../config/mongodb");
    var Pedidos = db.Mongoose.model('pedidos', db.UserSchema, 'pedidos');
    var pedido = new Pedidos({ nome: cont.nome, endereco: cont.endereco, telefone: cont.telefone, produto: cont.produto, valor: cont.valor, qtd: cont.qtd });
    pedido.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("PEDIDO FEITO COM SUCESSO");
            res.render('pedido', {cont})
           
        }
    });
});
     }