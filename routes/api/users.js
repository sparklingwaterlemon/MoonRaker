const express = require('express');
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

router.get('/check-token', usersCtrl.checkToken);


// POST /api/users
router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);


module.exports = router;
