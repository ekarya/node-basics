// Panggil filesystem dan url
const fs = require("fs");
const url = require("url");

function panggilHTML(path, res) {
    fs.readFile(path, null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("File tidak ditemukan");
        } else {
            res.write(data);
        }
        res.end();
    });
}

module.exports = {
    routingURL: function(req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });

        const path = url.parse(req.url).pathname;
        switch (path) {
            case "/":
                panggilHTML("./index.html", res);
                break;
            case "/login":
                panggilHTML("./login.html", res);
                break;
            default:
                res.writeHead(404);
                res.write("Url tidak ditemukan");
                res.end();
        }
    }
};
