const express = require('express');
const User = require('../model/user');
const router = express.Router();



// api create 
router.get('/', async(req, res) => {
    const user = await User.find()

    // res.json(user) // here we directly sent the data use res.json 

    // sent the data as obj with the status code so while fetch data the by the react - after getting the res, we need to use data.data otherwise we are not abel to use map function. because map function is only work on the array.
    res.status(200).json({
        message : "get all the users successfully",
        data : user
       
    })


})

router.post('/', async (req, res) => {
    const user = new User (req.body)
    await user.save();

    res.status(201).json({
        message : 'user is save to the db successfully',
        user : user
    })
})

module.exports = router;

