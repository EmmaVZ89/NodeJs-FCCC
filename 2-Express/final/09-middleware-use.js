const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

app.use([authorize, logger]); // applies multiple middleware to all routes

// app.use(logger); // applies the middleware to all routes than be below the line of code where it is.
// app.use("/api", logger); // applies to all routes than starting in "/api"
// api/home/about/products

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
