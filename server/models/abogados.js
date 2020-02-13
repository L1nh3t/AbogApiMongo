const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const abogado = new Schema({
  nombre: String,
  casosExitosos : Number,
  areaLaboral : String,
  img_url:{
    type:String,
    default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplantillasdememes.com%2Fimg%2Fplantillas%2Fyo-habia-ponido-mis-cosas-aqui01561772600.jpg&f=1&nofb=1"
  },
})
const Abogados = mongoose.model("Abogados",abogado);
module.exports = {
    Abogados
}