const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  if (req.url !== "/" && req.url !== "/about") {
    res.end(`<h1>Ooop!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back Home</a>`);
  }
});

server.listen(5000);
