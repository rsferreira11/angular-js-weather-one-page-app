var express = require('express');
var app = express();
var path = require('path');

process.env.PORT = 8080;
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log('Running on http://localhost:' + port);