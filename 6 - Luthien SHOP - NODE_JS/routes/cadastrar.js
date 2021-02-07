const prodcadastro = (app)=>{

    app.post('/cadastrar', (req,res)=>{
      
        conteudo = {
            codigo: req.body.codigo_prod,
            nome: req.body.nome_prod,
            valor: req.body.valor_prod
        }
        dados=[];
        dados.push(conteudo)
         res.render('exibir_produtos', dados )
    })

}
module.exports = prodcadastro;