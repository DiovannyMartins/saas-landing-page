/**
 * Animated counter module
 * Handles metric counters with animation
 */

import { getElement, getAllElements } from "./utils.js";

const DURACAO_ANIMACAO_MS = 1500;

export function initCounters() {
  const metricasNumeros = getAllElements(
    ".metric-item span:not(.metric-fixo)",
    "metric counters"
  );

  if (metricasNumeros.length === 0) return;

  const metricsSection = getElement(".metrics", "Metrics section");

  if (!metricsSection) return;

  const metricasObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          metricasNumeros.forEach((numero) => animarContador(numero));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  metricasObserver.observe(metricsSection);
}

function animarContador(elemento) {
  const valorRaw = elemento.dataset.valor;
  if (!valorRaw) return;

  const valorFinal = parseFloat(valorRaw);
  const prefixo = elemento.dataset.prefixo || "";
  const sufixo = elemento.dataset.sufixo || "";
  const casasDecimais = valorRaw.includes(".") ? 1 : 0;

  const inicio = performance.now();

  function atualizar(agora) {
    const progresso = Math.min((agora - inicio) / DURACAO_ANIMACAO_MS, 1);
    const valorAtual = (valorFinal * progresso).toFixed(casasDecimais);

    elemento.textContent = `${prefixo}${valorAtual}${sufixo}`;

    if (progresso < 1) {
      requestAnimationFrame(atualizar);
    }
  }

  requestAnimationFrame(atualizar);
}
