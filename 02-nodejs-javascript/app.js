// Basic fundamental modul
// http adalah modul core dari node.js
const http = require("http");
const port = 3000;

const modul1 = require("./modul1");
const modul2 = require("./modul2");

function panggilModule(req, res) {
    res.writeHead(200, { "Content-Type": "plain/text" });
    res.write(modul2.myVariable);
    modul2.myFungsi();
    res.end();
}

http.createServer(panggilModule).listen(port, () => {
    console.log("Server running bro please check localhost:3000");
});
