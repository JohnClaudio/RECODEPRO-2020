module.exports = (app) => {
  app.get('/categorais', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
      query.query_categorias(connection,
    function(error, results, fields){
      console.log(error,results)
      res.json(results);
    });
  });
}