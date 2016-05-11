// Routing

var express = require("express");
var app = express();

app.get('/', function(req,res){
    res.send("<h1>Hello</h1> Express");
});

app.get('/me', function(req,res){
   res.send('@glaucofox');
});

app.get('/who/:name?/:title?', function(req,res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>'+ title +' '+ name + ' was here.</p>');
});

app.get('*', function(req,res){
    res.send("<h1>404: Not Found</h1><p>Bad route request</p>");
});

var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});