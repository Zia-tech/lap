const express = require('express');
const { createLap, getAllLaps, updateLap, deleteLap } = require('../controller/lap.controller');

const router = express.Router();

router.post('/', createLap);
router.get('/', getAllLaps);
router.put('/:id', updateLap);
router.delete('/:id', deleteLap);

module.exports = router;