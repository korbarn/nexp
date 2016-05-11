/*jslint node: true*/
// add the http module
var http = require('http'); 

// create Server
var myServer = http.createServer(function(req,res){
    res.writeHead(200, {"Content-type" : "text/plain"});
    res.write("Hello");
    res.end();
}); 

myServer.listen(3000);
