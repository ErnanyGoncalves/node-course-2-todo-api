//W:\MongoDB\Server\4.0\bin>mongod.exe --dbpath W:/mongo-data

//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    //deleteMany
    /* db.collection("Todos").deleteMany({text:"Gozei"}).then((result)=>{
        console.log(result);
    }); */
    //deleteOne
    /* db.collection("Users").deleteOne({name:"Daniel"}).then((result)=>{
        console.log(result);
    }); */
    //findOneAndDelete
    /* db.collection("Todos").findOneAndDelete({completed:true}).then((result)=>{
        console.log(result);
    }); */
    //client.close();
});