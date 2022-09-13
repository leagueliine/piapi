const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default:'point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

//PI Shema
const PISchema = new Schema ({
  name: {
    type: String,
    required: [true, '*Campo obrigatório!']
  },
  details: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  geometry: GeoSchema
  //TODO: geolocalização
});

// Criar modelo_PI baseado em PISchema:
//'PontosInteresse' -> nome da // coleção
const PI = mongoose.model('PontosInteresse',PISchema);

module.exports = PI;