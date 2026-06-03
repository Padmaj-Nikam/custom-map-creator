const http = require('http');
const port = process.env.PORT || 3000;

const requestListener = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Custom Map Creator backend is running.' }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
