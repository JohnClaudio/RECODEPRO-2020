 const prodcadastro = (app)=>{
     app.get('/', (req,res)=>{
         res.render('produtos')
     })
}
module.exports = prodcadastro;