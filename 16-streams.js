const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", { highWaterMark: 90000, encoding: "utf-8" });// wrong path

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
// const stream = createReadStream('../content/big.txt', {enconding: 'utf8'});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
