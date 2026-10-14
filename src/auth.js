import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { one, run, now } from "./db.js";

export const SESSION_TTL = 30 * 24 * 3600; // soniya

export function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(String(password), salt, 64);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(password, stored) {
  const [algo, saltHex, hashHex] = String(stored).split("$");
  if (algo !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(String(password), Buffer.from(saltHex, "hex"), expected.length);
  return timingSafeEqual(actual, expected);
}

export function createSession(userId) {
  const token = randomBytes(32).toString("base64url");
  run("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)", token, userId, now() + SESSION_TTL * 1000);
  return token;
}

export function destroySession(token) {
  if (token) run("DELETE FROM sessions WHERE token = ?", token);
}

export function sessionUser(token) {
  if (!token) return null;
  const user = one(
    `SELECT u.id, u.username, u.name, u.role, u.last_seen
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token = ? AND s.expires_at > ?`,
    token,
    now(),
  );
  if (!user) return null;
  if (!user.last_seen || now() - user.last_seen > 60_000) {
    run("UPDATE users SET last_seen = ? WHERE id = ?", now(), user.id);
  }
  return user;
}

export const publicUser = (u) => u && { id: u.id, username: u.username, name: u.name, role: u.role };

/** Birinchi ishga tushishda ustoz (admin) hisobini yaratadi. */
export function ensureAdmin() {
  if (one("SELECT 1 FROM users WHERE role = 'admin'")) return;
  const username = (process.env.ADMIN_USERNAME || "ustoz").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "ustoz123";
  const existing = one("SELECT id FROM users WHERE username = ?", username);
  if (existing) {
    run("UPDATE users SET role = 'admin', password_hash = ? WHERE id = ?", hashPassword(password), existing.id);
  } else {
    run(
      "INSERT INTO users (username, name, password_hash, role, created_at) VALUES (?, ?, ?, 'admin', ?)",
      username,
      "Ustoz",
      hashPassword(password),
      now(),
    );
  }
  console.log(`\n  Ustoz hisobi yaratildi →  login: ${username}   parol: ${password}`);
  console.log("  Kirgandan keyin parolni albatta o'zgartiring!\n");
}
