const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

console.log(process.env.NODE_ENV);
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Host Name : 127.0.0.1, Port : ${port}\nurl : 127.0.0.1:${port}`)
);
