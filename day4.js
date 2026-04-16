const express = require('express');

// const app = express();

// 🚀 Day 4: Step 1 — Setup Express

// app.get('/', (req, res) => {
//     res.send("server is created by express")
// })

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })



// 🚀 Day 4: Step 2 — Multiple Routes

// app.get('/', (req, res) => {
//     res.send("Home page")
// })

// app.get('/about', (req, res) => {
//     res.send("This is About page")
// })

// app.get('/contact', (req, res) => {
//     res.send("This is contact page")
// })

// app.get('/service', (req, res) => {
//     res.send("This is service page")
// })


// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })



//🚀 Day 4: Step 3 — Send JSON (Super Important)

// app.get('/users', (req, res) => {
//     const user = [
//         {name: "Rahul", age: 21},
//         {name : "suhan" , age: 34}
//     ]

//     res.json(user)
// })

// app.get('/product', (req, res) => {
//     const product = [
//         {name: "Laptop", price: 50000},
//         {name: "Mobile", price: 20000}
//     ]

//     res.json(product)
// })

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })



//🚀 Day 4: Step 4 — POST Request in Express

// const app = express();

// //midleware 
// app.use(express.json());

// app.post('/add-user', (req, res) => {
//     let user = req.body;
//     console.log(user)

//     // res.json({
//     //     message : "successfully user added",
//     //     user : user
//     // })
// })

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })


// 🚀 Day 4: Final Step — Mini API Project

// const app = express();
// //midleware 
// app.use(express.json());

// const users = [];

// app.get('/users', (req, res) => {
//     res.json(users);
// })

// app.post('/add-user', (req, res) => {
//     let newUser = req.body;
//     users.push(newUser);

//     res.json(users)
// })

// app.delete('/')

// app.listen(3000, () => {
//     console.log("server is running at port 3000")
// })


// delete the last user 

const app = express();

app.use(express.json());

const users = [
    {id: 1, name: "Rahamt", age: 24},
    {id: 2, name: "suhan", age: 93},
    {id: 3, name: "bappi", age: 23}
]

app.get('/user', (req, res) => {
    res.status(200).json({
        message : "user retrive successfully",
        data : users
    })

    app.post('/user/add', (req, res) => {
        // extract the new user from the body
        const newUser = req.body;

        // create unique id 
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

        // insert the new id in the new user 
        newUser.id = newId;

        // push the new user in the array 
        users.push(newUser);

        res.status(201).json({
            message: "new user added successfully",
            data : users,
            totalUser : users.length 
        })

    })

    app.delete('/user/last', (req, res) => {

        // delete the last user
        const deleteUser = users.pop();

        // sent the message to the client
        res.status(200).json({
            message : "last user deleted successfully",
            deleteUser : deleteUser,
            remaninngUser : users
        })
    })
})


app.listen(3000, () => {
    console.log("server is runnsing at port 3000")
})