const express = require('express');
const cors = require('cors');
const { notFound, errorHandler } = require('../middlewares/error.middleware');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.get('/api', (req, res) => {
  res.send({
    success: true,
    message: 'NodeJS Backend working successfully',
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
