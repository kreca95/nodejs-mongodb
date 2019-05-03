// const MongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID} =require("mongodb");

const obj=new ObjectID();

console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    //deleteMany
    // db.collection("Todos").deleteMany({text:"jeedi bola nestoooooooooo"}).then(result=>{
    //     console.log(result);
    // },err=>{

    // });
    // db.collection("Todos").deleteOne({text:"walk the dog"}).then(result=>{
    //     console.log(result);
    // })
    // db.collection("Todos").findOneAndDelete({completed:false}).then(result=>{
    //     console.log(result);
    // })

    db.collection("User").deleteMany({name:"Kreso"}).then(result=>{
        console.log(result);
    })
    // db.close();
});