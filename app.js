var express = require('express');
var mongoose = require('mongoose');
var index = require('./config');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view enginge', 'ejs');

mongoose.connect(index.getDbConnectionString());
app.listen(port);