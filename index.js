log("Starting server");

let server = require('http').createServer((req, res) => {
    res.end("Hello from local server");
}).listen(8081);

process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);	    
    });
});

function log(log) {
    console.log(log);
    console.log("");
}

