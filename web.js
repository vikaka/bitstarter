var express = require('express');

var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());
app.get('/', function(request,response) 
{
var html = fs.readFileSync(htmlfile).toString();
response.send(html);
app.get('/login', function(req, res){
   res.send(fs.readFileSync('form.html').toString());
}); });
  
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
