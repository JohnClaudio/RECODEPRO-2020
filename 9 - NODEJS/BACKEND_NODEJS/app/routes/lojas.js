module.exports = (app) => {
  app.get('/lojas', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
      query.query_lojas(connection,
    function(error, results, fields){
      console.log(error,results)
      res.json(results);
    });
  });
}