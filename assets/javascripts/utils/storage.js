export function saveLocal(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch(e){ console.warn(e); }
}
export function loadLocal(key, fallback = {}) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e){ return fallback; }
}
