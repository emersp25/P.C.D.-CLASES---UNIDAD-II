// ================================================
// CONFIGURACIÓN DE CLASES
// Para añadir una clase nueva: agregar un objeto aquí.
// ================================================
const CLASES = [
  { key: 'clase1', label: 'Clase 1',  folder: 'clase1', file: 'clase1.html', tema: 'Escritura para Web' },
  { key: 'clase2', label: 'Clase 2',  folder: 'clase2', file: 'clase2.html', tema: 'Creación de Blogs' },
  { key: 'clase3', label: 'Clase 3',  folder: 'clase3', file: 'clase3.html', tema: 'El Motor del Blog (CMS)' },
];

// ================================================
// CONSTRUIR EL NAV DINÁMICAMENTE
// ================================================
function buildNav() {
  const nav = document.querySelector('.topnav');
  if (!nav) return;

  const activeKey = nav.dataset.active || '';
  const base      = nav.dataset.base   || './';   // './' desde raíz, '../' desde subcarpeta

  const brand = document.createElement('div');
  brand.className = 'topnav-brand';
  brand.innerHTML = `<a href="${base}index.html">📚 Prod. Contenidos Digitales</a>`;

  const toggle = document.createElement('button');
  toggle.className = 'topnav-toggle';
  toggle.setAttribute('aria-label', 'Menú');
  toggle.innerHTML = `<span></span><span></span><span></span>`;

  const links = document.createElement('div');
  links.className = 'topnav-links';
  links.innerHTML = `<a class="nav-home" href="${base}index.html" title="Inicio">🏠</a>`;

  CLASES.forEach(c => {
    const a = document.createElement('a');
    a.href = `${base}${c.folder}/${c.file}`;
    a.textContent = c.label;
    a.title = c.tema;
    if (c.key === activeKey) a.classList.add('nav-active');
    links.appendChild(a);
  });

  nav.appendChild(brand);
  nav.appendChild(toggle);
  nav.appendChild(links);

  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// ================================================
// ANIMACIÓN DE SCROLL (compartida)
// ================================================
function initScrollObserver() {
  const slides = document.querySelectorAll('.slide');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  slides.forEach(slide => observer.observe(slide));
}

// ================================================
// TOGGLE GENÉRICO PARA REVELAR RESPUESTAS
// ================================================
function toggleReveal(btnId, boxId, labelOpen, labelClose) {
  const box = document.getElementById(boxId);
  const btn = document.getElementById(btnId);
  if (!box || !btn) return;
  const isVisible = box.classList.toggle('visible');
  btn.textContent = isVisible ? labelClose : labelOpen;
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  initScrollObserver();
});
