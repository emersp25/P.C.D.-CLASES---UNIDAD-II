// ================================================
// CONTADOR DE CARACTERES — ACTIVIDAD SIMULADOR
// ================================================
function countChars() {
  const input = document.getElementById('metaInput');
  const fill  = document.getElementById('counterFill');
  const count = document.getElementById('charCount');
  const msg   = document.getElementById('counterMsg');

  if (!input) return;

  const len   = input.value.length;
  const max   = 155;
  const pct   = Math.min((len / max) * 100, 100);

  count.textContent = len;
  fill.style.width  = pct + '%';

  if (len === 0) {
    fill.style.background = '#16a34a';
    msg.textContent = '';
    msg.style.color = '';
  } else if (len <= 120) {
    fill.style.background = '#16a34a';
    msg.textContent = `✅ Vas bien — ${max - len} caracteres restantes.`;
    msg.style.color = '#86efac';
  } else if (len <= 155) {
    fill.style.background = '#f59e0b';
    msg.textContent = `⚠️ Atención — solo ${max - len} caracteres restantes.`;
    msg.style.color = '#fcd34d';
  } else {
    fill.style.background = '#dc2626';
    msg.textContent = `❌ Límite superado por ${len - max} caracteres — Google cortará el texto.`;
    msg.style.color = '#fca5a5';
  }
}

// ================================================
// SHIM DE TOGGLE LOCAL
// ================================================
function toggleAnswer() {
  toggleReveal('btnReveal', 'answerBox', '🔑 Ver Clave de Respuestas', '🙈 Ocultar Clave');
}
