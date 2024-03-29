// --------------Requires----------
require('dotenv').config();
require('./config/database')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = express.Router();
const usersCtrl = require('./controllers/api/users');

const port = process.env.PORT || 3001;
const app = express();
const ensureLoggedIn = require('./config/ensureLoggedIn');

// --------------middleware----------

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// --------------Routes----------
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// --------------Server----------

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });