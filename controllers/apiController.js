const PI = require('../models/PImodel')

exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller')
};

module.exports.details = (req, res, next) =>{
  let lng = parseFloat(req.query.lng);
  let lat = parseFloat(req.query.lat);
  const maxDist = 100000;
PI.aggregate([{
  '$geoNear' : {
    "near": { 'type': 'Point',
    "coordinates": [parseFloat(lng), parseFloat(lat)] },
    "spherical": true,
    "distanceField": 'dist',
    "$limit": 3,
    "$maxDistance": maxDist
  }
}])
.then(pi => res.send(pi))
.catch(next);
};

//adicionar novo ponto de interesse
exports.create = function (req, res, next) {
 // cria novo 'pi' na BD a partir do pedido, depois, devolve o 'pi' criado ao cliente
 PI.create(req.body) .then(function(pi){
  res.send(pi);
 }).catch(next);
};

//TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
  PI.findByIdAndUpdate({_id: req.params.id}, req.body) .then(function() {
    PI.findOne({_id: req.params.id}) .then(function(ip){
      res.send(ip);
    });
  }) .catch(next);
};

//TODO: apagar ponto de interesse
exports.delete = function (req, res, next) {
PI.findByIdAndRemove({_id: req.params.id}) .then(function(pi){
  res.send(pi);
}) .catch(next);
};
