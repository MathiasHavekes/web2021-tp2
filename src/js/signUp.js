const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var redirectHomePage = (req, res, next) => {
  if (req.session.userId) {
    res.redirect("/");
  } else {
    next();
  }
};

router.get("/", redirectHomePage, (req, res, next) => {
  res.render("signup", { userId: false });
});

router.post("/submit", redirectHomePage, (req, res, next) => {
  const { surname, name, phone, email, password, confirmedPassword } = req.body;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { Nom : name, Prénom : surname, Téléphone : phone, Email : email, password : password };
    dbo.collection("client").insertOne(myobj, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });
module.exports = router;}
