var log = require('debug_log').debug_log;

const PORT_NUMBER = 4949;

var express = require("express");

var app = express();

app.get('/', function(req, res) {
  res.send('bingo');
});

app.listen(PORT_NUMBER);

log('Server started on port ' + PORT_NUMBER);
