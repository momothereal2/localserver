console.log("Starting server");
require('http').createServer((req, res) => {
    res.end("Hello from local server");
}).listen(8081);

