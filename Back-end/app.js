import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const express= require('express');
var app = express();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
const express= require('express')
const passport = require('passport');//login
const cookieParser = require('cookie-parser');//login
const session = require('express-session');
const passportLocal = require('passport').Strategy;//login



//MIDDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Para acceder al directorio actual


// app.get('/', function(req,res){
//     res.send('Hello World!');
// });

app.use('/api', require('./routes/users'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// ASIGNAR PUERTO ESPECIFICO
// app.listen(3000,function name() {
//     console.log('Example app listing on port 3000!');
// })

// ASIGNAR PUERTO DINAMICO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
 console.log('Contectado al puerto '+ app.get('puerto'));
});






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