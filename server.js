const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to mongoDB database');
  });

console.log(`Node Environment : ${process.env.NODE_ENV}`);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server url : 127.0.0.1:${port}`));
