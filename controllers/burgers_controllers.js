var express = require("express");
var burger = require("../models/burger");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    console.log("post in controller");
  burger.insertOne([
    "burger_name", "burger_description"
  ], [
    req.body.burger_name, req.body.burger_description
  ], function(result) {
    //   console.log(result);
      console.log(result.insertId);
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  // #mathtrick
  var devoured = 1 - req.body.devoured;


  burger.updateOne(devoured, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
