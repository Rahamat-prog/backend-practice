const express = require('express');
const User = require('../models/userModel')
const router = express.Router();


// router 
router.get('/', async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        message : "data fetch successfully",
        data : users
    })
})

router.post('/', async (req, res) => {
    const users = new User(req.body);

    // save the data into db
   await users.save();

    res.status(201).json({
        message : "data is save in db",
        data : users
    })
})

// delete user 
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await User.findByIdAndDelete(id);
    res.json("user is deleted");
})

module.exports = router;