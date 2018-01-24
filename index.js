log("Starting server");
require('http').createServer((req, res) => {
    res.end("Hello from local server");
}).listen(8081);

function log(log) {
    console.log(log);
    console.log("");
}

