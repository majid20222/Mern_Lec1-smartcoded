const http = require("http");

// const routes = require("./routes");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("in the middleware-1 !");
  next();
});
app.use((req, res, next) => {
  console.log("in the middleware-2 !");
  res.send("<h1>Hello from Express</h1>");
  //   res.write("<h1>Hello from Express</h1>");
  //   res.end();
});
const server = http.createServer(app);
server.listen(500);
