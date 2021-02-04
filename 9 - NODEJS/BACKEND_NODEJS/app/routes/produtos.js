module.exports = (app) => {
  app.get('/produtos', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
    query.query_produtos(connection,
    function(error, results, fields){
      console.log(error,results)
      res.send(results);
    });
  });
}