var express = require("express");
var router = express.Router();
const Manager = require("../DB/Model/userSchema");

/* GET home page. */
router.post("/createUser", function (req, res, next) {
  const json = req.body;
  let user = new Manager(json);
  user.save((err, doc) => {
    if (doc) {
      console.log("data added");
      res.json(doc);
    } else {
      console.log(err);
    }
  });
});

router.get("/getUsers", function (req, res, next) {
  Manager.find((err, doc) => {
    if (res) {
      res.json(doc);
    } else {
      console.log(err);
    }
  });
});

router.delete("/deleteUser", function (req, res, next) {
  console.log("my param is", req.query);
  Manager.deleteOne({ _id: req.query._id }, (err, doc) => {
    if (res) {
      res.json(doc);
    } else {
      console.log(err);
    }
  });
});

router.put("/editUser", function (req, res, next) {
  Manager.update({ _id: req.query._id }, { $set: req.body }, (err, doc) => {
    if (doc) {
      res.json(doc);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
