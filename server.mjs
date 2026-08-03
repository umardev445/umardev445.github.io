import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8'
};

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const normalized = path.posix.normalize(pathname).replace(/^\/+/, '');
  const candidate = path.resolve(root, normalized || 'index.html');

  if (!candidate.startsWith(`${root}${path.sep}`) && candidate !== root) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    return path.join(candidate, 'index.html');
  }
  if (!path.extname(candidate)) {
    const cleanUrlIndex = path.join(candidate, 'index.html');
    if (fs.existsSync(cleanUrlIndex)) return cleanUrlIndex;
  }
  return candidate;
}

const server = http.createServer((request, response) => {
  const requestedFile = resolveRequestPath(request.url || '/');
  const fallback404 = path.join(root, '404.html');
  const file = requestedFile && fs.existsSync(requestedFile) ? requestedFile : fallback404;
  const status = file === fallback404 ? 404 : 200;
  const type = contentTypes[path.extname(file).toLowerCase()] || 'application/octet-stream';

  response.writeHead(status, {
    'Content-Type': type,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-cache'
  });
  fs.createReadStream(file).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`QuranCrest Academy is available at http://127.0.0.1:${port}`);
});
