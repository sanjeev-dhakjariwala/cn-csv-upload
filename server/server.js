const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const color = require('colors');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(color.blue(`APP IS LSITENING ON PORT ${PORT}`));
});
