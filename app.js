const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  switch (url) {
    case "/":
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(
        `<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>`
      );
      res.write("</html>");
      break;

    default:
      res.write("<html>");
      res.write("<head><title>My First Page</title></head>");
      res.write("<body><h1>Hello from Node.js server!</h1></body>");
      res.write("</html>");
  }

  res.end();
});

server.listen(3001);
