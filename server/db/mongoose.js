var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true});
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp", {useNewUrlParser: true});

module.exports = {mongoose};