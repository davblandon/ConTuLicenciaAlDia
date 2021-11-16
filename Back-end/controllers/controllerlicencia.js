const { Mongoose } = require("mongoose");
const licencia = {};
const Licencia = require("../models/licencia");

function prueba(req, res) {
  // res.status(200).send({
  //   message: "probando una acción",
  // });
  res.status(200).send("ESTA MONDA FUNCIONA WEON");
}
function savelicencia(req, res) {
  var mylicencia = new Licencia(req.body);
  mylicencia.save((err, result) => {
    res.status(200).send({ message: result });
  });
}
function buscarlicencia(req, res) {
  var idlicence = req.params.id;
  Licencia.findById(idlicence).exec(function (err, result) {
    if (err) {
      res
        .status(500)
        .send({ message: "Error al momento de ejecutar la solicitud" });
    } else {
      if (!result) {
        res
          .status(404)
          .send({ message: "El registro a buscar no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}

function listarlicencias(req, res) {
  var idlicence = req.params.idb;
  if (!idlicence) {
    var result = Licencia.find({}).sort("numero_secuencial");
  } else {
    var result = Licencia.find({ _id: idlicence }).sort("numero_secuencial");
  }
  result.exec(function (err, result) {
    if (err) {
      res
        .status(500)
        .send({ message: "Error al momento de ejecutar la solicitud" });
    } else {
      if (!result) {
        res
          .status(404)
          .send({ message: "El registro a buscar no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}
licencia.updatelicencia = async (req, res) => {
  const { id } = req.params;
  const licence = {
    numero_secuencial: req.body.numero_secuencial,
    fecha_expedicion: req.body.fecha_expedicion,
    Tipo: req.body.Tipo,
    modalidad: req.body.modalidad,
    vigencia: req.body.vigencia,
    nombre_completo_propietario: req.body.nombre_completo_propietario,
    identificacion_propietario: req.body.identificacion_propietario,
    nombre_urbanizacion: req.body.nombre_urbanizacion,
    direccion_predio: req.body.direccion_predio,
    descripcion: req.body.descripcion,
    planos: req.body.planos,
    supervicion_tecnica: req.body.supervicion_tecnica,
    certificado_ocupacion: req.body.certificado_ocupacion,
  };
  await Licencia.findByIdAndUpdate(id, { $set: licence }, { new: true });
  res.json({
    status: "LicenciaUpdate",
  });
};
module.exports = {
  prueba,
  savelicencia,
  buscarlicencia,
  listarlicencias,
  licencia,
};
