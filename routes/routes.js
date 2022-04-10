const express = require('express');
const { getUsersList } = require('../controller/usersDatas');
const router = express.Router();
const { jwtAuth } = require('../middleware/userAuth')
const { signup, signin } = require('../controller/Auth');

// Auth
router.post('/signup', signup)
router.post('/signin', signin)

// apis
router.use('/*', jwtAuth);
router.get('/getUsersList', getUsersList);

module.exports = router;
