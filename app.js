const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req.url, req.method, req.headers);
});

server.listen(3001);
