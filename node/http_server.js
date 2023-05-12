const http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'ContentType': 'text/plain'})
  response.end("hello world");
}).listen(8888);

console.log("Server started");