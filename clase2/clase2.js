// ================================================
// REVELAR / OCULTAR CONSEJOS
// ================================================
function toggleTips() {
  const box = document.getElementById('tipsBox');
  const btn = document.getElementById('btnReveal');
  const isVisible = box.classList.toggle('visible');
  btn.textContent = isVisible ? '🙈 Ocultar Consejos' : '💡 Ver Consejos para una Buena Entrega';
}

// ================================================
// ANIMACIÓN DE ENTRADA POR SCROLL
// ================================================
const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

slides.forEach(slide => observer.observe(slide));
