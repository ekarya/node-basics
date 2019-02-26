// import http module & port
const http = require("http");
const port = 3000;

function cobaPanggil(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Testing brooooo!!");
    res.end();
}

http.createServer(cobaPanggil).listen(port, () => {
    console.log("Server running bro please check localhost:3000");
});

// Simple createServer
// http.createServer(cobaPanggil).listen(3000);
