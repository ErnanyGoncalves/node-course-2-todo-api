//W:\MongoDB\Server\4.0\bin>mongod.exe --dbpath W:/mongo-data

//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    /* db.collection("Todos").find({
        _id: new ObjectID("5bca8cb8dbaeef68142390a2")
    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined,2));
    }, (err)=> {
        console.log("Erroor", err);
    }); */

    db.collection("Users").find({
        name: "Daniel"
    }).toArray().then((docs) => {
        console.log("User: Daniel");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Erroor", err);
    });

    /* db.collection("Todos").find().count().then((count) => {
        console.log(`Todos count:${count}`);

    }, (err) => {
        console.log("Erroor", err);
    }); */

    db.collection("Users").find({
        name: "Daniel"
    }).count().then((count) => {
        console.log(`Daniels count:${count}`);

    }, (err) => {
        console.log("Erroor", err);
    });

    client.close();
});