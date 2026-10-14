import { api } from "../api.js";
import { html, mount } from "../dom.js";
import { state, go } from "../app.js";

function shell(inner) {
  return html`<div class="auth">
    <aside class="auth-art" aria-hidden="true">
      <div class="auth-kana"><span>あ</span><span>ア</span><span>日</span></div>
      <p class="auth-quote">千里の道も一歩から</p>
      <p class="auth-quote-uz">Ming chaqirimlik yo'l ham bir qadamdan boshlanadi</p>
    </aside>
    <section class="auth-panel">
      <div class="auth-brand">
        <span class="brand-mark lg">日</span>
        <div>
          <h1>Nihongo Ustoz</h1>
          <p>Minna no Nihongo 1–2 asosida yapon tili</p>
        </div>
      </div>
      ${inner}
    </section>
  </div>`;
}

function bindForm(form, url) {
  const error = form.querySelector(".form-error");
  const button = form.querySelector("[type=submit]");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.disabled = true;
    error.hidden = true;
    try {
      const res = await api.post(url, Object.fromEntries(new FormData(form)));
      state.user = res.user;
      go("/");
    } catch (err) {
      error.textContent = err.message;
      error.hidden = false;
    } finally {
      button.disabled = false;
    }
  });
}

export async function loginPage(el) {
  const cfg = await api.get("/api/config").catch(() => ({ allowRegister: false }));
  mount(
    el,
    shell(html`<form class="form auth-form">
        <h2>Kirish</h2>
        <label class="field">Login
          <input name="username" autocomplete="username" autocapitalize="none" required autofocus>
        </label>
        <label class="field">Parol
          <input name="password" type="password" autocomplete="current-password" required>
        </label>
        <p class="form-error" hidden></p>
        <button class="btn btn-primary btn-block btn-lg" type="submit">Kirish</button>
      </form>
      <p class="auth-alt">
        ${cfg.allowRegister
          ? html`Hisobingiz yo'qmi? <a href="#/register">Ro'yxatdan o'ting</a>`
          : "Hisob ochish uchun ustozingizga murojaat qiling."}
      </p>`),
  );
  bindForm(el.querySelector("form"), "/api/auth/login");
  el.querySelector("[autofocus]")?.focus();
}

export async function registerPage(el) {
  const cfg = await api.get("/api/config");
  if (!cfg.allowRegister) {
    mount(
      el,
      shell(html`<div class="auth-form">
        <h2>Ro'yxatdan o'tish yopiq</h2>
        <p class="muted">Hisob ochish uchun ustozingizga murojaat qiling.</p>
        <a class="btn btn-block" href="#/login">Kirish sahifasiga qaytish</a>
      </div>`),
    );
    return;
  }
  mount(
    el,
    shell(html`<form class="form auth-form">
        <h2>Ro'yxatdan o'tish</h2>
        <label class="field">Ism va familiya
          <input name="name" autocomplete="name" required autofocus placeholder="Masalan: Aziza Karimova">
        </label>
        <label class="field">Login
          <input name="username" autocomplete="username" autocapitalize="none" required placeholder="aziza">
          <small class="help">Lotin harflari, raqamlar, _ . - (3–32 belgi)</small>
        </label>
        <label class="field">Parol
          <input name="password" type="password" autocomplete="new-password" required>
          <small class="help">Kamida 6 belgi</small>
        </label>
        ${cfg.needsCode
          ? html`<label class="field">Taklif kodi
              <input name="code" required autocomplete="off">
              <small class="help">Kodni ustozingizdan oling</small>
            </label>`
          : ""}
        <p class="form-error" hidden></p>
        <button class="btn btn-primary btn-block btn-lg" type="submit">Hisob ochish</button>
      </form>
      <p class="auth-alt">Hisobingiz bormi? <a href="#/login">Kirish</a></p>`),
  );
  bindForm(el.querySelector("form"), "/api/auth/register");
  el.querySelector("[autofocus]")?.focus();
}
