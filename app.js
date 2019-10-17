const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTED]
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up on http://localhost:${process.env.PORT}`);
});
