const asyncHandler = require('express-async-handler');
const fs = require('fs');
const uploadDirectory = './uploads';

const homeController = asyncHandler(async (req, res) => {
  try {
    const files = await fs.promises.readdir(uploadDirectory);
    const fileName = files.map((file) => file);

    console.log(fileName);

    res.render('index.ejs', { uploadedCSVFiles: fileName });
  } catch (err) {
    console.log('Error reading upload directory:', err);
    throw new Error('Error reading files');
  }
});

module.exports = { homeController };
