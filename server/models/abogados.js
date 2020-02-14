const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const abogadoSquema = new Schema({
  nombre: String,
  casosExitosos : Number,
  areaLaboral : String,
  img_url: String
})
const Abogados = mongoose.model("Abogados",abogadoSquema)
module.exports = {
    Abogados
}

