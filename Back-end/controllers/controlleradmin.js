const Admin = require("../models/administrador");
const administrador = {};

function pruebadmin(req, res) {
  res.status(200).send("EL ADMIN ES DAVID");
}

function buscaradmin(req, res) {
  var idadmin = req.params.id;
  Admin.findById(idadmin).exec(function (err, result) {
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

administrador.updateadmin = async (req, res) => {
  const { id } = req.params;
  const admin = {
    email: req.body.email,
    contraseña: req.body.contraseña,
  };
  await Admin.findByIdAndUpdate(id, { $set: admin }, { new: true });
  res.json({
    status: "AdminUpdate",
  });
};
module.exports = {
  pruebadmin,
  buscaradmin,
  administrador,
};
