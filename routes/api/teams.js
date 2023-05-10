const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/teams');
const pokeCtrl = require('../../controllers/pokemon');

router.get('/', teamsCtrl.index);
router.post('/', teamsCtrl.create);
router.delete('/:id', teamsCtrl.deleteTeam)
router.post('/:id/pokemon',pokeCtrl.create)
router.delete('/:id/pokemon/:pokeId', pokeCtrl.delete)

module.exports = router;