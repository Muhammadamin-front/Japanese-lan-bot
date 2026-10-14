import { readFile, stat } from "node:fs/promises";
import path from "node:path";

export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function fail(status, message) {
  throw new HttpError(status, message);
}

/**
 * Juda kichik router: r.get("/api/lessons/:n", "user", handler).
 * access: "public" | "user" | "admin".
 */
export function createRouter() {
  const routes = [];
  const add = (method) => (pattern, access, handler) => {
    const keys = [];
    const source = pattern.replace(/:(\w+)/g, (_, key) => {
      keys.push(key);
      return "([^/]+)";
    });
    routes.push({ method, re: new RegExp(`^${source}/?$`), keys, access, handler });
  };

  return {
    get: add("GET"),
    post: add("POST"),
    put: add("PUT"),
    patch: add("PATCH"),
    delete: add("DELETE"),
    match(method, pathname) {
      let pathExists = false;
      for (const route of routes) {
        const m = route.re.exec(pathname);
        if (!m) continue;
        pathExists = true;
        if (route.method !== method) continue;
        const params = Object.fromEntries(route.keys.map((k, i) => [k, decodeURIComponent(m[i + 1])]));
        return { route, params };
      }
      return pathExists ? { notAllowed: true } : null;
    },
  };
}

export function parseCookies(header = "") {
  const out = {};
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    const key = part.slice(0, i).trim();
    if (key) out[key] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

export function readJson(req, limit = 1_000_000) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new HttpError(413, "So'rov juda katta"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) return resolve({});
      try {
        const data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
        resolve(data && typeof data === "object" ? data : {});
      } catch {
        reject(new HttpError(400, "JSON noto'g'ri"));
      }
    });
    req.on("error", reject);
  });
}

export function sendJson(res, status, data, cookies = []) {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  };
  if (cookies.length) headers["Set-Cookie"] = cookies;
  res.writeHead(status, headers);
  res.end(body);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

/** public/ papkasidan fayl beradi; noma'lum yo'llar uchun index.html (SPA). */
export async function serveStatic(req, res, root, pathname) {
  let rel;
  try {
    rel = decodeURIComponent(pathname);
  } catch {
    fail(400, "Noto'g'ri manzil");
  }
  let file = path.join(root, path.normalize(rel));
  if (file !== root && !file.startsWith(root + path.sep)) fail(403, "Ruxsat yo'q");

  let data;
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    data = await readFile(file);
  } catch {
    if (path.extname(rel)) fail(404, "Fayl topilmadi");
    file = path.join(root, "index.html");
    data = await readFile(file);
  }
  res.writeHead(200, {
    "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    "Cache-Control": "no-cache",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(req.method === "HEAD" ? undefined : data);
}
