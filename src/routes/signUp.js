const { signUp } = require('../controllers/signUp/signUp');
const express = require('express');

const router = express.Router();

router.post('/api/register', signUp);

module.exports = router;
