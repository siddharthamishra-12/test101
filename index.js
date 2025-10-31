// Load the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set default header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Routing logic
  if (req.url === '/test' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Test API working!' }));
  } else if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Hello, world!\n');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
