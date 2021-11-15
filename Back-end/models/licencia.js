var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var LicenciaSchema = Schema({
  numero_secuencial: { type: Number, required: true },
  fecha_expedicion: { type: Date, required: true },
  Tipo: { type: String, required: true },
  modalidad: { type: String, required: true },
  vigencia: { type: Date, required: true },
  nombre_completo_propietario: { type: String, required: true },
  identificacion_propietario: { type: Number, required: true },
  nombre_urbanizacion: { type: String, required: true },
  direccion_predio: { type: String, required: true },
  descripcion: { type: String, required: true },
  planos:{ type: Array, required: true },
  supervicion_tecnica: { type: Boolean, required: true },
  certificado_ocupacion: { type: Boolean, required: true },
});
var Licencia = mongoose.model("licencia", LicenciaSchema);
module.exports = Licencia;
