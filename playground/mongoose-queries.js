const { ObjectID } = require("mongodb");

var { mongoose } = require("./../server/db/mongoose");
var { Todo } = require("./../server/models/todo");
var { User } = require("./../server/models/user");

/* var id = "5bccba4668b0320d40a25356";
if(!ObjectID.isValid(id)){
    console.log("ID not valid");
} */

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos: ", todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo: ", todo);
}); */

/* Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo by ID: ", todo);
}).catch((e)=>console.log(e)); */

User.findById("5bcd05aadbaeef681423b8d0").then((user) => {
    if(!user){
        return console.log("Unable to find use");
    }
    console.log(JSON.stringify(user,undefined,2));
}, (e) => {
    console.log(e);
});