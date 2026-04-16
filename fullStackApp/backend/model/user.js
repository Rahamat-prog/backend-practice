const  mongoose = require('mongoose')

// create schema 

const userSchema = new mongoose.Schema({
    name : String,
    age : Number, 
    email : String

})

// create model for cruid operation
module.exports = mongoose.model("User", userSchema);