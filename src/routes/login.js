const { login } = require('../controllers/login/login');
const express = require('express');

const router = express.Router();

router.post('/api/login', login);
module.exports = router;
