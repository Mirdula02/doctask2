const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Mirdula</h1><p>Age:22</p><p>From:Tamilnadu,India</p>');
});

server.listen(80, () => {
  console.log('Server running at http://localhost/');
});
