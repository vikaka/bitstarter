var express = require('express');

var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());
app.get('/', function(request,response) 
{
var html = fs.readFileSync(htmlfile).toString();
response.send(html);

app.get('/homepage', function(req, res){
   res.send(fs.readFileSync(htmlfile).toString());
});

app.get('/maintenancelogin', function(req, res){
   res.send(fs.readFileSync('MaintenanceLogin.html').toString());
});
app.get('/operationslogin', function(req, res){
   res.send(fs.readFileSync('OperationsLogin.html').toString());
});
app.get('/logisticslogin', function(req, res){
   res.send(fs.readFileSync('LogisticsLogin.html').toString());
});
app.get('/crewlogin', function(req, res){
   res.send(fs.readFileSync('CrewLogin.html').toString());
});
app.get('/managementlogin', function(req, res){
   res.send(fs.readFileSync('ManagementLogin.html').toString());
});
app.get('/contact', function(req, res){
   res.send(fs.readFileSync('contact.html').toString());
}); });
  
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
