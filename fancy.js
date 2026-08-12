// Theme toggle (separate key so it won't clash with the basic page)
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme-fancy', next);
});

// Accordion cards
document.querySelectorAll('[data-accordion] .card__head').forEach((head) => {
  head.addEventListener('click', () => {
    const card = head.closest('.card');
    const open = card.classList.toggle('is-open');
    head.setAttribute('aria-expanded', String(open));
  });
});

// Research theme filters -> show only matching publications
const filterBtns = document.querySelectorAll('.tile__filter');
const tiles = document.querySelectorAll('.tile');
const pubs = document.querySelectorAll('.pub');
const resetBtn = document.getElementById('pub-reset');
const pubNote = document.getElementById('pub-note');
const pubSection = document.getElementById('publications');
const defaultNote = pubNote.innerHTML;
let activeTheme = null;

function applyFilter(theme) {
  activeTheme = theme;
  filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.theme === theme && theme !== null)));
  tiles.forEach((t) => t.classList.toggle('is-active', t.dataset.theme === theme && theme !== null));
  let count = 0;
  pubs.forEach((p) => {
    const match = theme === null || p.dataset.theme === theme;
    p.hidden = !match;
    if (match) count++;
  });
  resetBtn.hidden = theme === null;
  pubNote.innerHTML = theme === null
    ? defaultNote
    : `Showing ${count} publication${count === 1 ? '' : 's'} in this area.`;
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    if (activeTheme === theme) {
      applyFilter(null); // toggle off
    } else {
      applyFilter(theme);
      pubSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

resetBtn.addEventListener('click', () => applyFilter(null));

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObserver.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach((s) => revealObserver.observe(s));

// Scroll-spy: highlight active nav link
const navLinks = document.querySelectorAll('.nav__link');
const spyTargets = [...navLinks].map((l) => document.querySelector(l.getAttribute('href')));
const spy = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
    }
  }),
  { rootMargin: '-40% 0px -55% 0px' }
);
spyTargets.forEach((t) => t && spy.observe(t));
