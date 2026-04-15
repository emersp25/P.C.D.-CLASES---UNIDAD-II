// ================================================
// REVELAR / OCULTAR RESPUESTA
// ================================================
function toggleAnswer() {
  const box = document.getElementById('answerBox');
  const btn = document.getElementById('btnReveal');
  const isVisible = box.classList.toggle('visible');
  btn.textContent = isVisible ? '🙈 Ocultar Respuesta' : '👀 Ver Respuesta Esperada';
}

// ================================================
// ANIMACIÓN DE ENTRADA POR SCROLL (Intersection Observer)
// ================================================
const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

slides.forEach(slide => observer.observe(slide));
