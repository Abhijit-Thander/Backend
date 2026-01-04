const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("Welcome to about page");
  } else res.end("Hello World");
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
