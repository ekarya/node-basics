const port = 3000;
const http = require("http");
const app = require("./app");

http.createServer(app.routingURL).listen(port, () => {
    console.log("Server running bro please check localhost:3000");
});
