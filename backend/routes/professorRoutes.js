const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController'); // Caminho correto para o controlador

router.post('/professores', professorController.registerProfessor);
router.get('/professores', professorController.getProfessor);
router.get('/professores/:id', professorController.getProfessorById);
router.put('/professores/:id', professorController.updateProfessor);
router.delete('/professores/:id', professorController.deleteProfessor);

module.exports = router;
