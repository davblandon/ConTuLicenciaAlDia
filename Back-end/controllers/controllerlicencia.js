function prueba(req, res) {
    res.status(200).send({
      message: "probando una acción",
    });
  res.status(200).send("Prueba satisfactoria");
}
function savelicencia(req, res) {
  var mylicence = new licencia(req.body);
  mylicence.save((err, result) => {
    res.status(200).send({ message: result });
  });
}
function buscarlicencia(req, res) {
  var idlicence = req.params.id;
  licencia.findById(idlicence).exec(function (err, result) {
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
    }
    );
}

function listarlicencias(req, res) {
  var idlicence = req.params.idb;
  if (!idlicence) {
    var result = licencia.find({}).sort("nombre");
  } else {
    var result = licencia.find({ _id: idlicence }).sort("nombre");
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
function updatelicencia(req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);
  licencia.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    function (err, licencia) {
      if (err) res.send(err);
      res.json(licencia);
    }
  );
}
module.exports = {
  prueba,
  savelicencia,
  buscarlicencia,
  listarlicencias,
  updatelicencia,
};
