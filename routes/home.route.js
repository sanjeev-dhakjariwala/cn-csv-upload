const express = require('express');
const { homeController } = require('../controllers/home.controller');

const router = express.Router();

router.route('/').get(homeController);

module.exports = router;
