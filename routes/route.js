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

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
    try {
      var data = await UserModel.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //Update by ID Method
  router.put("/update/:id", async (req, res) => {
    try {
      var id = req.params.id;
      var updatedData = req.body;
      var options = { new: true };
      console.log(updatedData);
  
      var result = await UserModel.findOneAndUpdate({"_id": id.trim()}, updatedData, options);
  
      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  //Delete by ID Method
  router.delete("/delete/:id", async (req, res) => {
    try {
      var id = req.params.id;
      var data = await UserModel.findByIdAndDelete(id);
      res.send(`Document with ${data.name} has been deleted..`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });