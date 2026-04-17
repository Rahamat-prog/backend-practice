const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const userRouters = require('./routers/userRouters')


const app = express();

// middleware to convert the data into obj
app.use(express.json());

app.use(cors());

// connect with the db
mongoose.connect('mongodb://localhost:27017/mydb')
.then(console.log('db is connected'))
.catch(error => console.log(error))

app.use('/api/user', userRouters)


app.listen(3000,() => {
    console.log("server is running at port 3000")
})