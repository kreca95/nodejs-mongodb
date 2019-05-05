const { mongoose } = require("./../server/db/mongoose");
const  {ObjectId}=require("mongodb");
const { Todo } = require("./../server/models/todo");

const{User}=require("./../server/models/user");

var id = "5ccedefef2cef6902f9f9604";

if (!ObjectId.isValid(id)) {
    console.log("ID is not valid");
}

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log("Todos", todos);
// })

// Todo.findOne(
//     {
//         _id: id
//     }).then(todo => {
//         console.log("Todo", todo);
//     })


// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log("id not found");
//     }
//     console.log("Todo by id", todo);
// })
var userId="5ccdbb30a0aff800338372e3";
User.findById(userId).then(user=>{
    if (!user) {
        return console.log("unable to find user");
    }
    console.log(user);
},err=>{
    console.log(err);
})