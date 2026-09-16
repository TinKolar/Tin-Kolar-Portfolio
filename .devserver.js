// Minimal static file server for local preview only (not part of the deployed site).
// Serves files exactly as-is: no clean-URL redirects, no path rewriting.
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.argv[2] || 5173;

const types = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".glb": "model/gltf-binary", ".gltf": "model/gltf+json",
  ".json": "application/json", ".ico": "image/x-icon"
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(root, urlPath === "/" ? "/index.html" : urlPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) filePath = path.join(filePath, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found: " + urlPath);
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
      res.end(data);
    });
  });
}).listen(port, () => console.log(`Preview server running at http://localhost:${port}`));
