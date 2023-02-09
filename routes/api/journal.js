const express = require('express');
const router = express.Router();
const journalCtrl = require("../../controllers/api/journal");

// BASE_URL /api/journal
router.get('/', journalCtrl.index);
router.get('/update', journalCtrl.update);


module.exports = router;