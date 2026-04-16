const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./route/userRoute')

const app = express();

// middleware 
app.use(express.json())

app.use(cors());

// connect with the database 
mongoose.connect('mongodb://localhost:27017/mydb')
.then(() => {
    console.log('db is connected')
})
.catch((error) => {
    console.log(error)
})


// routes 
app.use('/api/user', userRouter)



app.listen(3000, () => {
    console.log("server is runnding at port 3000");
})
