var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
  name: String,
  type: String,
  date: Date
});

var MovieModel = mongodb.mongoose.model('Movie', MovieSchema);
//var MovieDAO = function () { };
//
//MovieDAO.prototype.save = function (obj, cb) {
//  var instance = new MovieModel(obj);
//  instance.save(cb);
//};

//module.exports =new MovieDAO();

module.exports =MovieModel;
