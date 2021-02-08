module.exports = (app) => {

    /* GET Userlist page. */
app.get('/pedidos', function(req, res) {
    var db = require("../config/mongodb");
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({}).lean().exec(
       function (e, docs) {
          res.json({ "userlist": docs });
    });
});

}