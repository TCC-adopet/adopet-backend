var express = require("express");
var Models = require("../models/model");
var UserModel = Models.Users;

var router = express.Router();

module.exports = router;

//Post Method
router.post("/post", async (req, res) => {
  var data = new UserModel({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    var dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    var data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});