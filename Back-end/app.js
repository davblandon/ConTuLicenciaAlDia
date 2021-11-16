const express = require("express");
const session = require("express-session");

var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

// Configurar cabeceras y cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-RequestedWith, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(require("./routers/router"));
module.exports = app;