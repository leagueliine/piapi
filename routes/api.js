const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

//url do teste será: https://localhost:5000/api/teste
router.get('/teste', apiController.test);

//TODO: listar pontos de interesse da BD
router.get('/details', apiController.details);

//TODO: adicionar novo ponto de interesse
router.post('/interest', apiController.create);

//TODO: atualizar ponto de interesse
router.put('/interest/:id', apiController.update);

//TODO: apagar ponto de interesse
router.delete('/interest/:id', apiController.delete);

module.exports = router;
