import { fail } from "./http.js";

export function cleanName(value) {
  const s = String(value ?? "").trim().replace(/\s+/g, " ");
  if (s.length < 2 || s.length > 60) fail(400, "Ism 2–60 belgidan iborat bo'lishi kerak");
  return s;
}

export function cleanUsername(value) {
  const s = String(value ?? "").trim().toLowerCase();
  if (!/^[a-z0-9_.-]{3,32}$/.test(s)) fail(400, "Login 3–32 belgi bo'lsin: lotin harflari, raqamlar, _ . -");
  return s;
}

export function cleanPassword(value) {
  const s = String(value ?? "");
  if (s.length < 6 || s.length > 128) fail(400, "Parol kamida 6 belgidan iborat bo'lishi kerak");
  return s;
}

export function toInt(value, { min = -Infinity, max = Infinity, name = "Qiymat" } = {}) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < min || n > max) fail(400, `${name} noto'g'ri`);
  return n;
}

export function text(value, { max = 4000, required = false, name = "Maydon" } = {}) {
  const s = String(value ?? "").trim();
  if (required && !s) fail(400, `${name} bo'sh bo'lmasligi kerak`);
  if (s.length > max) fail(400, `${name} juda uzun`);
  return s;
}
