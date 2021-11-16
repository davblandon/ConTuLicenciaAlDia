const { Router, response } = require("express");
const router = Router();
const path = require("path")
const controllerlicencia = require("../controllers/controllerlicencia");
const express = require("express");


router.get('/login', (req, res) =>{res.sendFile(path.resolve( __dirname,"../views/login.html"))})
router.get("/prueba", controllerlicencia.prueba);
router.post('/crear',controllerlicencia.savelicencia);
router.post('/buscar/:id',controllerlicencia.buscarlicencia);
router.post('/buscarg/:id?',controllerlicencia.listarlicencias);
router.put('/updatelicencia/:id', controllerlicencia.licencia.updatelicencia);

var controlleradmin = require("../controllers/controlleradmin");
router.get("/pruebaadmin", controlleradmin.pruebadmin);
router.post("/buscaradmin/:id", controlleradmin.buscaradmin);
router.put('/updateadmin/:id', controlleradmin.administrador.updateadmin);
module.exports = router;
