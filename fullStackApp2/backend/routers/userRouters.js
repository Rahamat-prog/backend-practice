const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// router
router.get("/", async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    message: "data fetch successfully",
    data: users,
  });
});

router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  // console.log("newUser", newUser) // when form is submit from the browser the post req was sent through react and backend process this req and store the data inside this variabel we have checked via console,

  // save the data into db
  await newUser.save();

  //    const users = await User.find(); if we want to show all the user again after add new user in db

  res.status(201).json({
    message: "new user is save successfully in db",
    data: newUser,
    // ListOfUser: users
  });
});

// delete user
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json("user is deleted successfully");
});

// update the user
router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      // {new : true} // return the update data  its old version outded show warning
      { returnDocument: "after" }, // Mongoose updated its AP
    );
    // console.log(req.body); //debug 
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
