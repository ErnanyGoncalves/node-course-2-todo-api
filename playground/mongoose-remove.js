const { ObjectID } = require("mongodb");

var { mongoose } = require("../server/db/mongoose");
var { Todo } = require("../server/models/todo");
var { User } = require("../server/models/user");


/* Todo.remove({}).then((result) => {
    console.log(result);
}); */



Todo.findOneAndDelete("5bce0b6db32dd1efc23d55af").then((todo) => {
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo removed:",todo);
}).catch((e)=>console.log(e));

