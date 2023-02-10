const express = require('express');
const router = express.Router();
const journalCtrl = require("../../controllers/api/journal");

// BASE_URL /api/journal
router.get('/', journalCtrl.index);

router.post('/add', journalCtrl.addNew);

router.put('/update', journalCtrl.update);

router.delete('/delete', journalCtrl.destroy);


module.exports = router;