const { login , userList} = require('../controllers/login/login'); 
const express = require('express');

const router = express.Router();

router.post('/api/login', login);

router.get('/api/users', userList);
module.exports = router;
