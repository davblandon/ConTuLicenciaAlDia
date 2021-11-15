<<<<<<< HEAD
const express= require('express');
var app = express();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
=======
const express= require('express')
const passport = require('passport');//login
const cookieParser = require('cookie-parser');//login
const session = require('express-session');
const passportLocal = require('passport').Strategy;//login
>>>>>>> e49670600239920f6f8a54086546de9e76df57ae

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
app.use(require('./routers/router'));
module.exports = app;



//leer datos de un formulario
// app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, res.send ({ message: 'Incorrect password.' }));
      }
      return done(null, user);
    });
  }
));


var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

<<<<<<< HEAD
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
=======
app.use(passport.initialize());
app.use(passport.session());
>>>>>>> e49670600239920f6f8a54086546de9e76df57ae

// app.configure = () => {
//   app.use(express.static('public'));
//   app.use(express.cookieParser());
//   app.use(express.bodyParser());
//   app.use(express.session({ secret: 'keyboard cat' }));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(app.router);
// };


// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

//   app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login' }));



