const asyncHandler = require('express-async-handler');
const fs = require('fs');

const csvDetails = asyncHandler(async (req, res) => {
  const { filename } = req.query;
  const filePath = `./uploads/${filename}`;

  try {
    // Read the CSV file content
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    // Pass the file content to the details page for rendering
    res.render('csv-details.ejs', { filename, fileContent });
  } catch (err) {
    console.error('Error reading CSV file:', err);
    // Handle the error appropriately (e.g., display an error page)
    res.render('error.ejs');
  }
});

module.exports = { csvDetails };
