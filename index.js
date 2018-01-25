const PORT = 8081;
log("Starting server");

let server = require('http').createServer((req, res) => {
    res.end("Hello from local server");
}).listen(PORT, () => {
    log("Server is listening on port " + PORT);
});

process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});

function log(log) {
    console.log("STDOUT: " + log);
}
