const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync('../navbar-app/index.html');
const homeStyles = readFileSync('../navbar-app/styles.css');
const homeImage = readFileSync('../navbar-app/logo.svg');
const homeLogic = readFileSync('../navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  //   console.log(req.method); // show the method
  //   console.log(req.url); // show the request's url
  const url = req.url;
  console.log(url);
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); // also can be 'text/plain' and others mime types
    // res.write("<h1>home page</h1>");
    res.write(homePage);
    res.end(); // allways call it 
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
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
