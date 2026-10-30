const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

// Ставим тему и меняем значок на кнопке
function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Берём сохранённую тему, а если её нет — тему системы
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (systemDark ? 'dark' : 'light'));

// По клику переключаем и запоминаем выбор
toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Подставляем текущий год в подвал
document.getElementById('year').textContent = new Date().getFullYear();
