// const MongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID} =require("mongodb");

const obj=new ObjectID();

console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");


    db.close();
});