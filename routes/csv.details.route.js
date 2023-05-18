const express = require('express');

const router = express.Router();
const { csvDetails } = require('../controllers/csv.details.controller');

router.route('/details').get(csvDetails);

module.exports = router;
