// const MongoClient=require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();

console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    // db.collection("Todos").find({

    //     _id: new ObjectID("5cc620f3bd55242541ecab73")

    // }).toArray().then((docs) => {
    //     console.log("TODOS");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("unable to fetch todos", err);
    // })
    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`count = ${count}`);
    // }, (err) => {
    //     console.log("unable to fetch todos", err);
    // })

    db.collection("User").find({
        name:"Kreso"
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },err=>{
        console.log("error",err);
    })
    //db.close();
});