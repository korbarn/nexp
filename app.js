var express = require("express");
var app = express();

// ---- EJS
app.set('view engine', 'ejs');

// ---- Routing
app.get('/', function(req,res){
    res.render('default', {
        title:'Home',
        classname:'home',
        users:['Ray','Morten','James']
    }); // renders the default on views folder passing parameters
});

app.get('/about', function(req,res){
   res.render('default', {
        title:'About Us',
        classname: 'about'
    }); 
});


app.get('*', function(req,res){
    res.send("<h1>404: Not Found</h1><p>Bad route request</p>");
});


// ---- Server
var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});