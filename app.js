const http = require("http");

http.createServer(function(req, res) {
    res.write("Hello from Node via Jenkins");
    res.end();
}).listen(3000, "0.0.0.0");
