// const MongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID} =require("mongodb");

const obj=new ObjectID();

console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");
    db.collection("Todos").findOneAndUpdate({
        _id:new ObjectID("5cc6fc3176b1844c40a754f9")
    },
    {
        $set:{
            completed:true
        },
        $inc:{
                age:30
        }
    },{
        returnOriginal:false
    }).then(res=>{
        console.log(res);
    })
    // db.close();
});