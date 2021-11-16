const express= require('express')
const passport = require('passport');//login
const cookieParser = require('cookie-parser');//login
const session = require('express-session');
const passportLocal = require('passport').Strategy;//login


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
app.use(require('./routers/router'));
module.exports = app;



//leer datos de un formulario
app.use(express.urlencoded({extended: true}));

app.use(cookieParser(''));


//comportamiento de la sesion
app.use(session({
  secret: 'es secrto',
  resave: true,
  saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());

// passport.use(new PassportLocal(function(username,password,done) {
//   done()
//   if(username == "codigo facilito" and password == "123456"){

//   }
// }));



app.set('view engine', 'ejs');
//login 
app.get("/", function (req, res) {
    //sí ya iniciamos, dar vista unica
    //si el login sale mal, redirecion
  }
)
app.get('/login', function (req, res) {
    //mostrar formulario de login
    res.render(login);
  },

app.post('/login', function (req, res) {
    //recibir credenciales e inicior sesion 
  }))