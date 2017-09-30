var express = require('express');
var mongoose = require('mongoose');
var index = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view enginge', 'ejs');

mongoose.connect(index.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);