const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task using async/await
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});