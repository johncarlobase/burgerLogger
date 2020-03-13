// dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// gets all the burgers in the db
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", { burgers: data });
	});
});

// adds a burger
router.post("/", function(req, res) {
	console.log(req.body);
	burger.insertOne(req.body.name, function() {
		res.redirect("/");
	});
});

// updates a burger entry
router.put("/:id", function(req, res) {
	console.log(req.body);
	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
});

// deletes a burger
router.delete("/:id", function(req, res) {
	burger.deleteOne(req.params.id, function(result) {
		res.redirect("/");
	});
});

module.exports = router;

