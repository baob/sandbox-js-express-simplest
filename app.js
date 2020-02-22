const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
const message = process.env.MESSAGE || '';

app.get('/', (req, res) => res.send(`Hello World! ${message}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
