const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Modelo de la coleccion Clientes
const clientesSquema = new Schema({
  nombre: String,
  correo: {
    type: String,
    unique: true
  },
  numero: Number,
  areaDeInteres: String,
})
const Clientes = mongoose.model("Clientes",clientesSquema)
module.exports = {
    Clientes
}
