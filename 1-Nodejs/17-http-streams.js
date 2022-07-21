const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res); // transfer-encodign: chunked
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });

  })
  .listen(5000);
