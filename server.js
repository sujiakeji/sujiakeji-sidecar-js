var http = require('http');
var url = require("url");
var path = require('path');

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    if (pathname === '/') {
        res.end(JSON.stringify({ "index": "Index" }));
    }
    else if (pathname === '/health') {
        res.end(JSON.stringify({ "status": "UP" }));
    }
    else {
        res.end("404");
    }
});

server.listen(11100, function () {
    console.log('listening on port 11100');
});
