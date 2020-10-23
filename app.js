const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  switch (true) {
    case url === "/":
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(
        `<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>`
      );
      res.write("</html>");
      break;

    case url === "/message" && method === "POST":
      fs.writeFileSync("message.txt", "Dummy text");
      res.statusCode = 302;
      res.setHeader("Location", "/");
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
