// require Express application framework
var express = require("express");
// require Handlebars templating engine for Express
var exphbs = require("express-handlebars");
// require 'request' module that allows to make external HTTP requests
var request = require("request");

var app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.static(__dirname + "/public"));

// use Handlebars as templating engine instead of Express default one
app.engine("hbs", exphbs({ defaultLayout: "base", extname: ".hbs" }));
app.set("view engine", "hbs");

// define the app routes
app.get("/", function (req, res) {
  res.render("pages/home", {});
});

app.get("/about", function (req, res) {
  res.render("pages/about", {});
});

app.get("/portfolio", function (req, res) {
  res.render("pages/portfolio", {});
});
app.get("/contact", function (req, res) {
  res.render("pages/contact", {});
});

// make a 404 error page
app.use(function (req, res) {
  res.status(404);
  res.render("pages/404");
});

// handle other errors
app.use(function (err, req, res) {
  res.status(500);
  res.render("pages/error", { error: err });
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
