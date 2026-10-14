import { one, run, now, getSettings } from "../db.js";
import { hashPassword, verifyPassword, createSession, destroySession, publicUser, SESSION_TTL } from "../auth.js";
import { fail } from "../http.js";
import { cleanName, cleanUsername, cleanPassword } from "../validate.js";

export default function authRoutes(r) {
  r.get("/api/config", "public", () => {
    const s = getSettings();
    return { allowRegister: s.allow_register, needsCode: !!s.register_code };
  });

  r.get("/api/auth/me", "public", ({ user }) => ({ user: publicUser(user) ?? null }));

  r.post("/api/auth/register", "public", ({ body, setCookie }) => {
    const s = getSettings();
    if (!s.allow_register) fail(403, "Ro'yxatdan o'tish yopiq. Ustozingizga murojaat qiling.");
    if (s.register_code && String(body.code ?? "").trim() !== s.register_code) fail(400, "Taklif kodi noto'g'ri");
    const name = cleanName(body.name);
    const username = cleanUsername(body.username);
    const password = cleanPassword(body.password);
    if (one("SELECT 1 FROM users WHERE username = ?", username)) fail(409, "Bu login allaqachon band");
    const { lastInsertRowid } = run(
      "INSERT INTO users (username, name, password_hash, role, created_at, last_seen) VALUES (?, ?, ?, 'student', ?, ?)",
      username, name, hashPassword(password), now(), now(),
    );
    const id = Number(lastInsertRowid);
    setCookie("sid", createSession(id), SESSION_TTL);
    return { user: publicUser(one("SELECT * FROM users WHERE id = ?", id)) };
  });

  r.post("/api/auth/login", "public", async ({ body, setCookie }) => {
    const username = String(body.username ?? "").trim().toLowerCase();
    const user = one("SELECT * FROM users WHERE username = ?", username);
    if (!user || !verifyPassword(String(body.password ?? ""), user.password_hash)) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      fail(401, "Login yoki parol noto'g'ri");
    }
    run("UPDATE users SET last_seen = ? WHERE id = ?", now(), user.id);
    setCookie("sid", createSession(user.id), SESSION_TTL);
    return { user: publicUser(user) };
  });

  r.post("/api/auth/logout", "public", ({ cookies, setCookie }) => {
    destroySession(cookies.sid);
    setCookie("sid", "", 0);
    return { ok: true };
  });

  r.post("/api/auth/password", "user", ({ user, body, cookies }) => {
    const row = one("SELECT password_hash FROM users WHERE id = ?", user.id);
    if (!verifyPassword(String(body.current ?? ""), row.password_hash)) fail(400, "Joriy parol noto'g'ri");
    run("UPDATE users SET password_hash = ? WHERE id = ?", hashPassword(cleanPassword(body.password)), user.id);
    run("DELETE FROM sessions WHERE user_id = ? AND token <> ?", user.id, cookies.sid);
    return { ok: true };
  });
}
