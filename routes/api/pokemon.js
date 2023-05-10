const express = require('express');
const router = express.Router();

router.post('/', pokeCtrl.create);


module.exports = router;