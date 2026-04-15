// ================================================
// REVELAR / OCULTAR SOLUCIONARIO
// ================================================
function toggleAnswer() {
  const box = document.getElementById('answerBox');
  const btn = document.getElementById('btnReveal');
  const isVisible = box.classList.toggle('visible');
  btn.textContent = isVisible ? '🙈 Ocultar Solucionario' : '🔑 Ver Solucionario (Docente)';
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
