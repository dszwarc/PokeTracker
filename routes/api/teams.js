const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/teams');

router.get('/', teamsCtrl.index);
router.post('/', teamsCtrl.create);
router.delete('/:id', teamsCtrl.deleteTeam)

module.exports = router;