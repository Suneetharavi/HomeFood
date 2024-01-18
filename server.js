// --------------Requires----------
require('dotenv').config();
require('./config/database')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = express.Router();

const port = process.env.PORT || 3001;
const app = express();

// --------------middleware----------

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));




// --------------Server----------

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });