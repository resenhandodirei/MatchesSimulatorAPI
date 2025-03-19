const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');

router.get('/', (req, res) => res.send('Bem-vindo à API de Simulação de Partidas de Vôlei!'));
router.get('/equipes', matchController.getTeams);
router.get('/campeonato', matchController.getTournament);
router.post('/simular', matchController.simulateMatch);
router.post('/avancar', matchController.advancePhase);

module.exports = router;
