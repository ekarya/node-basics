// import http module & port
const http = require("http");

function cobaPanggil(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Testing brooooo!!");
    res.end();
}

http.createServer(cobaPanggil).listen(3000);
