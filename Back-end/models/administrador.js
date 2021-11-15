var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AdministradorSchema = Schema({
  nombrecompleto: String,
  edad: Number,
  email: { type: String, required: true },
  contraseña: { type: String, required: true },
});
const Admin = mongoose.model("administrador", AdministradorSchema);
module.exports = Admin;
