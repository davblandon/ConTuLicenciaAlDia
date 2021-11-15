const { Router, response } = require("express");
const router = Router();
const path = require("path")
const controllerlicencia = require("../controllers/controllerlicencia");
const express = require("express");


router.get('/login', (req, res) =>{res.sendFile(path.resolve( __dirname,"../views/login.html"))})
router.get("/prueba", controllerlicencia.prueba);
router.post('/crear',controllerlicencia.savelicencia);
router.post('/buscar/:id',controllerlicencia.buscarlicencia);
router.post('/buscar/:id?',controllerlicencia.listarlicencias);

//var controlleradmin = require("../controllers/controlleradmin");
module.exports = router;
