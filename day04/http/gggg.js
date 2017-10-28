var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){

  // var myURL = url.parse(req.url, true);

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>success!</h1>')
  }else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Not Found!</h1>')
  }
}).listen(8000, function(){
  console.log('listen 8000 ...');
});
