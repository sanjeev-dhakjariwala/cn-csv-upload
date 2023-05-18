const express = require('express');
const cors = require('cors');
const { notFound, errorHandler } = require('../middlewares/error.middleware');
const app = express();
const path = require('path');
const homeRouter = require('../routes/home.route');
const uploadRouter = require('../routes/upload.route');
const csvRouter = require('../routes/csv.details.route');

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/api', (req, res) => {
  res.send({
    success: true,
    message: 'NodeJS Backend working successfully',
  });
});

app.use('/', homeRouter);
app.use('/upload', uploadRouter);
app.use('/csv', csvRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
