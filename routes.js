const requestHandler = (req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.write(
      `
        <html>
          <head>
            <title>Enter message</title>
          </head>
          <body>
            <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form>
          </body>
        </html>
      `
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log("Username:", username);
    });
  }
};

exports.handler = requestHandler;
