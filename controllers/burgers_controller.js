var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  
  burger.selectAll((burgerData) => {
    res.render("index", { burger_data: burgerData });
  });
});


router.put("/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {   
    console.log(result);
  });
});

module.exports = router;