const asyncHandler = require('express-async-handler');

let uploadedCSVFiles = [];
const uploadController = asyncHandler(async (req, res) => {
  if (req.file) {
    // File uploaded successfully
    uploadedCSVFiles.push(req.file.originalname);
    res.render('uploadStatus', { success: true});
  } else {
    // No file selected
    res.render('uploadStatus', { success: false });
  }
});

module.exports = { uploadController, uploadedCSVFiles };
