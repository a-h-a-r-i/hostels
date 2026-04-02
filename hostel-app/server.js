const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

function handler(req, res) {
  let url = (req.url || '/').split('?')[0];
  if (url === '/admin' || url === '/admin/') url = '/admin.html';
  const filePath = path.join(ROOT, url === '/' ? 'index.html' : url.replace(/^\//, ''));
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'text/plain',
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
}

// Local dev
if (require.main === module) {
  const http = require('http');
  const PORT = process.env.PORT || 3000;
  http.createServer(handler).listen(PORT, '0.0.0.0', () => {
    console.log('========================================');
    console.log('  HostelPro running!');
    console.log('  Tenant -> http://localhost:' + PORT);
    console.log('  Admin  -> http://localhost:' + PORT + '/admin');
    console.log('========================================');
  });
}

// Vercel serverless export
module.exports = handler;
