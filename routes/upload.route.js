const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const { uploadController } = require('../controllers/upload.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route('/').post(upload.single('csvFile'), uploadController);

module.exports = router;
