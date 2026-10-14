import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRouter, HttpError, parseCookies, readJson, sendJson, serveStatic } from "./src/http.js";
import { seedMissingLessons, seedMissingKanji, cleanup } from "./src/db.js";
import { sessionUser, ensureAdmin } from "./src/auth.js";
import authRoutes from "./src/routes/auth.js";
import studentRoutes from "./src/routes/student.js";
import adminRoutes from "./src/routes/admin.js";

const PUBLIC_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "public");
const PORT = Number(process.env.PORT) || 3000;

const router = createRouter();
authRoutes(router);
studentRoutes(router);
adminRoutes(router);

seedMissingLessons();
seedMissingKanji();
ensureAdmin();
cleanup();
setInterval(cleanup, 6 * 3600_000).unref();

async function handle(req, res) {
  const url = new URL(req.url, "http://localhost");
  const outCookies = [];
  try {
    if (!url.pathname.startsWith("/api/")) {
      if (req.method !== "GET" && req.method !== "HEAD") throw new HttpError(405, "Ruxsat etilmagan metod");
      return await serveStatic(req, res, PUBLIC_DIR, url.pathname);
    }

    const found = router.match(req.method, url.pathname);
    if (!found) throw new HttpError(404, "Topilmadi");
    if (found.notAllowed) throw new HttpError(405, "Ruxsat etilmagan metod");

    const cookies = parseCookies(req.headers.cookie);
    const user = sessionUser(cookies.sid);
    const { access, handler } = found.route;
    if (access !== "public" && !user) throw new HttpError(401, "Avval tizimga kiring");
    if (access === "admin" && user.role !== "admin") throw new HttpError(403, "Bu bo'lim faqat ustoz uchun");

    let body = {};
    if (req.method !== "GET") {
      // JSON talab qilish CSRF hujumlarini ham to'sadi (oddiy formalar JSON yubora olmaydi).
      if (!String(req.headers["content-type"] || "").includes("application/json")) {
        throw new HttpError(415, "So'rov JSON formatida bo'lishi kerak");
      }
      body = await readJson(req);
    }

    const ctx = {
      req,
      params: found.params,
      query: url.searchParams,
      body,
      user,
      cookies,
      setCookie: (name, value, maxAge) =>
        outCookies.push(`${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`),
    };
    const result = await handler(ctx);
    sendJson(res, 200, result ?? { ok: true }, outCookies);
  } catch (err) {
    const status = err instanceof HttpError ? err.status : 500;
    if (status === 500) console.error(err);
    if (!res.headersSent) sendJson(res, status, { error: status === 500 ? "Serverda xatolik yuz berdi" : err.message }, outCookies);
  }
}

http.createServer(handle).listen(PORT, () => {
  const lan = Object.values(os.networkInterfaces())
    .flat()
    .filter((i) => i && i.family === "IPv4" && !i.internal)
    .map((i) => `http://${i.address}:${PORT}`);
  console.log(`\n  日本語 Nihongo Ustoz ishga tushdi`);
  console.log(`  Shu kompyuterda:  http://localhost:${PORT}`);
  for (const u of lan) console.log(`  Tarmoqdagi o'quvchilar uchun:  ${u}`);
  console.log("");
});
