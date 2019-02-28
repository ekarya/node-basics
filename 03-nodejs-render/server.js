// fs adalah file system. module dari node.js
const port = 3000;
const fs = require("fs");
const http = require("http");

function panggilHTML(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./index.html", null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("File tidak ditemukan");
        } else {
            res.write(data);
        }
        res.end();
    });
}

http.createServer(panggilHTML).listen(port, () => {
    console.log("Server running bro please check localhost:3000");
});
