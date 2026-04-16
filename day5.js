// 🚀 Day 5: Step 1 — Connect MongoDB with Node.js

const express  = require('express');
const mongoose = require('mongoose');

// const app = express();

// middleware 
// app.use(express.json());


// // mongodb coneccted 
// mongoose.connect("mongodb://localhost:27017/mydb")
// .then(() => console.log("MongoDB is connected"))
// .catch((err) => console.log("something went wrong", err ))

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message : "server and db is connected"
//     })
// })

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })



//🚀 Day 5: Step 2 — Create Schema & Model

// const app = express();

// // middleware 
// app.use(express.json());    

// // mongodb coneccted 
// mongoose.connect("mongodb://localhost:27017/mydb")
// .then(() => console.log("MongoDB is connected"))
// .catch((err) => console.log("something went wrong", err ))


// // ✅ Step 1: Create User Schema
// const userSchema = new mongoose.Schema({
//     name : String,
//     age : Number,
//     email : String
// })

// // ✅ Step 2: Create Model
// const User = mongoose.model("User", userSchema); // it will automatically created collection "users" in the database 

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message : "server and db is connected"
//     })
// })

// app.post('/user/add', async (req, res) => {
    
//     try {
//         // convert the data into mongo db document so it is connect with the User moder which we have created above 
//         const newUser = new User(req.body);
//         console.log(newUser)

//     // save the data 
//     await newUser.save();

//     res.status(201).json({
//         message : "user added in db successfully",
//         data : newUser
//     })
//     } catch (error) {
//         res.status(500).json({
//         error : error.message
//         })
//     }
// })

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })


//🚀 Day 5: Step 4 — Fetch Data from MongoDB

const app = express();

// middleware 
app.use(express.json());    

// mongodb coneccted 
mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log("something went wrong", err ))


// ✅ Step 1: Create User Schema
const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String
})

// ✅ Step 2: Create Model
const User = mongoose.model("User", userSchema); // it will automatically created collection "users" in the database 

app.get('/', (req, res) => {
    res.status(200).json({
        message : "server and db is connected"
    })
})

app.post('/user/add', async (req, res) => {
    
    try {
        // convert the data into mongo db document so it is connect with the User moder which we have created above 
        const newUser = new User(req.body);
        console.log(newUser)

    // save the data 
    await newUser.save();

    res.status(201).json({
        message : "user added successfully",
        data : newUser
    })
    } catch (error) {
        res.status(500).json({
        error : error.message
        })
    }
})

app.get('/users', async (req, res) => {
    
    try {
    // fetch all the data from the database and send to the client
    // const users = await User.find()
    const users = await User.find({age: {$gt:  21}})

    res.json(users);

    } catch (error) {
        res.json({
            message : error.message
        })
    }
})
app.listen(3000, () => {
    console.log("server is running at port 3000")
})