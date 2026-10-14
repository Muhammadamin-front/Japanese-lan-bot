// Ilova holati va navigatsiya (sahifalar main.js ni import qilmasligi uchun alohida).

export const state = { user: null };

let renderer = () => {};
export const setRenderer = (fn) => {
  renderer = fn;
};

export function go(path) {
  const target = `#${path}`;
  if (location.hash === target) renderer();
  else location.hash = target;
}

/** Joriy sahifani qayta chizadi (masalan, testdan keyin), skroll joyida qoladi. */
export const refresh = () => renderer({ keepScroll: true });
