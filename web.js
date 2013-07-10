var express = require('express');
var buf = new buffer('index');
var json = JSON.stringlify(buf);
var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readFileSync(index.html));
console.log(json);
});
var copy = new Buffer(JSON.parse(json));
console.log(copy);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
