const express = require('express');
const { createLap, getAllLaps, updateLap, deleteLap } = require('../controller/lap.controller');
const protect = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/', protect, createLap);
router.get('/', getAllLaps);
router.put('/:id', protect, updateLap);
router.delete('/:id', protect, deleteLap);

module.exports = router;