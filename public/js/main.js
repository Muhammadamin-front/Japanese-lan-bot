import { api } from "./api.js";
import { state, go, setRenderer } from "./app.js";
import { html, mount, initials, speak, toast, formModal } from "./dom.js";
import { loginPage, registerPage } from "./pages/auth.js";
import { homePage } from "./pages/home.js";
import { kanaPage } from "./pages/kana.js";
import { lessonPage } from "./pages/lesson.js";
import { mistakesPage } from "./pages/mistakes.js";
import { kanjiListPage } from "./pages/kanjiList.js";
import {
  adminStudentsPage,
  adminStudentPage,
  adminLessonsPage,
  adminLessonPage,
  adminSettingsPage,
} from "./pages/admin.js";

const ROUTES = [
  { re: /^\/login$/, page: loginPage, guest: true },
  { re: /^\/register$/, page: registerPage, guest: true },
  { re: /^\/$/, page: homePage, nav: "home" },
  { re: /^\/kana$/, page: kanaPage, nav: "kana" },
  { re: /^\/lesson\/(\d+)(?:\/(vocab|grammar|kanji|practice|check))?$/, page: lessonPage, nav: "home" },
  { re: /^\/kanji$/, page: kanjiListPage, nav: "kanji" },
  { re: /^\/mistakes$/, page: mistakesPage, nav: "mistakes" },
  { re: /^\/admin$/, page: adminStudentsPage, nav: "admin", admin: true },
  { re: /^\/admin\/student\/(\d+)$/, page: adminStudentPage, nav: "admin", admin: true },
  { re: /^\/admin\/lessons$/, page: adminLessonsPage, nav: "admin", admin: true },
  { re: /^\/admin\/lesson\/(\d+)$/, page: adminLessonPage, nav: "admin", admin: true },
  { re: /^\/admin\/settings$/, page: adminSettingsPage, nav: "admin", admin: true },
];

const NAV = [
  { id: "home", href: "#/", label: "Darslar" },
  { id: "kana", href: "#/kana", label: "Kana" },
  { id: "kanji", href: "#/kanji", label: "Kanji" },
  { id: "mistakes", href: "#/mistakes", label: "Xatolarim" },
  { id: "admin", href: "#/admin", label: "Ustoz paneli", admin: true },
];

const view = document.getElementById("view");
const topbar = document.getElementById("topbar");
let lastPath = null;

function renderTopbar(active) {
  const u = state.user;
  topbar.hidden = !u;
  if (!u) return;
  mount(
    topbar,
    html`<div class="topbar-inner">
      <a class="brand" href="#/"><span class="brand-mark">日</span><span class="brand-name">Nihongo <b>Ustoz</b></span></a>
      <nav class="nav" aria-label="Asosiy menyu">
        ${NAV.filter((n) => !n.admin || u.role === "admin").map(
          (n) => html`<a href="${n.href}" class="${n.id === active ? "active" : ""}">${n.label}</a>`,
        )}
      </nav>
      <details class="user-menu">
        <summary aria-label="Foydalanuvchi menyusi">
          <span class="avatar">${initials(u.name)}</span><span class="user-name">${u.name}</span>
        </summary>
        <div class="menu">
          <div class="menu-head"><b>${u.name}</b><small>@${u.username} · ${u.role === "admin" ? "Ustoz" : "O'quvchi"}</small></div>
          <button type="button" data-act="password">Parolni o'zgartirish</button>
          <button type="button" data-act="logout">Chiqish</button>
        </div>
      </details>
    </div>`,
  );
}

async function render({ keepScroll = false } = {}) {
  const path = location.hash.replace(/^#/, "") || "/";
  const route = ROUTES.find((r) => r.re.test(path));
  if (!route) return go("/");
  if (route.guest && state.user) return go("/");
  if (!route.guest && !state.user) return go("/login");
  if (route.admin && state.user.role !== "admin") return go("/");

  const scrollY = window.scrollY;
  const samePage = path === lastPath;
  lastPath = path;
  renderTopbar(route.nav);
  document.body.classList.toggle("guest", !!route.guest);

  const el = document.createElement("div");
  el.className = "page";
  if (!keepScroll) el.innerHTML = '<div class="loader" aria-label="Yuklanmoqda"></div>';
  const old = view.firstElementChild;
  if (keepScroll && old) {
    // Eski sahifa yangisi tayyor bo'lguncha ko'rinib turadi (miltillamaslik uchun).
    const holder = document.createElement("div");
    try {
      await route.page(holder, path.match(route.re).slice(1));
      el.replaceChildren(...holder.childNodes);
      view.replaceChildren(el);
      window.scrollTo(0, scrollY);
    } catch (err) {
      handleError(err, el);
    }
    return;
  }
  view.replaceChildren(el);
  if (!samePage) window.scrollTo(0, 0);
  try {
    await route.page(el, path.match(route.re).slice(1));
  } catch (err) {
    handleError(err, el);
  }
}

function handleError(err, el) {
  if (err.status === 401) {
    state.user = null;
    return go("/login");
  }
  console.error(err);
  view.replaceChildren(el);
  mount(
    el,
    html`<div class="empty-state">
      <div class="empty-mark">！</div>
      <h2>Xatolik yuz berdi</h2>
      <p>${err.message}</p>
      <a class="btn" href="#/">Bosh sahifaga qaytish</a>
    </div>`,
  );
}

topbar.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  topbar.querySelector("details")?.removeAttribute("open");
  if (btn.dataset.act === "logout") {
    await api.post("/api/auth/logout").catch(() => {});
    state.user = null;
    go("/login");
  }
  if (btn.dataset.act === "password") {
    const ok = await formModal({
      title: "Parolni o'zgartirish",
      submitText: "O'zgartirish",
      fields: [
        { name: "current", label: "Joriy parol", type: "password", autocomplete: "current-password", autofocus: true },
        { name: "password", label: "Yangi parol (kamida 6 belgi)", type: "password", autocomplete: "new-password" },
      ],
      onSubmit: (v) => api.post("/api/auth/password", v),
    });
    if (ok) toast("Parol o'zgartirildi", "ok");
  }
});

document.addEventListener("click", (e) => {
  const sp = e.target.closest("[data-speak]");
  if (sp) {
    e.preventDefault();
    speak(sp.dataset.speak);
  }
  const menu = topbar.querySelector("details[open]");
  if (menu && !menu.contains(e.target)) menu.removeAttribute("open");
});

async function boot() {
  try {
    state.user = (await api.get("/api/auth/me")).user;
  } catch {
    state.user = null;
  }
  setRenderer(render);
  window.addEventListener("hashchange", () => {
    // Boshqa sahifaga o'tilganda ochiq test oynasi va modallar yopiladi.
    document.querySelectorAll(".test-overlay, .modal-backdrop").forEach((node) => node.remove());
    document.body.classList.remove("no-scroll");
    render();
  });
  render();
}

boot();
