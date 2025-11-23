import { createServer } from "http";
import { readFileSync, existsSync, createReadStream } from "fs";
import { extname, join, normalize } from "path";
import { app as apiApp } from "./backend/app.js";

const UI_DIR = normalize(join(__dirname, "..", "ui"));
const DIST_DIR = normalize(join(__dirname, "..", "dist"));

function contentType(path: string): string {
  const ext = extname(path).toLowerCase();
  switch (ext) {
    case ".html": return "text/html; charset=utf-8";
    case ".css": return "text/css; charset=utf-8";
    case ".js": return "application/javascript; charset=utf-8";
    case ".png": return "image/png";
    case ".jpg":
    case ".jpeg": return "image/jpeg";
    case ".svg": return "image/svg+xml";
    case ".ico": return "image/x-icon";
    default: return "application/octet-stream";
  }
}

function serveStatic(filePath: string, res: any) {
  if (!existsSync(filePath)) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ code: "NOT_FOUND", message: "Static file not found" }));
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", contentType(filePath));
  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");

  if (url.pathname.startsWith("/api")) {
    return apiApp(req, res);
  }

  if (url.pathname === "/" || url.pathname === "/index.html") {
    const primary = join(UI_DIR, "index.html");
    const fallback = join(UI_DIR, "P001.html");
    return serveStatic(existsSync(primary) ? primary : fallback, res);
  }

  if (url.pathname.startsWith("/ui/")) {
    const rel = url.pathname.replace("/ui/", "");
    return serveStatic(join(UI_DIR, rel), res);
  }

  if (url.pathname.startsWith("/dist/")) {
    const rel = url.pathname.replace("/dist/", "");
    return serveStatic(join(DIST_DIR, rel), res);
  }

  const uiTry = join(UI_DIR, url.pathname.replace(/^\//, ""));
  if (existsSync(uiTry)) return serveStatic(uiTry, res);
  const distTry = join(DIST_DIR, url.pathname.replace(/^\//, ""));
  if (existsSync(distTry)) return serveStatic(distTry, res);

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ code: "NOT_FOUND", message: "Unknown route" }));
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 5173;
server.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}/`);
});
