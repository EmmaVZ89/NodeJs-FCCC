const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
  //   console.log(req.method); // show the method
  //   console.log(req.url); // show the request's url
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); // also can be 'text/plain' and others mime types
    // res.write("<h1>home page</h1>");
    res.write(homePage);
    res.end(); // allways call it 
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
