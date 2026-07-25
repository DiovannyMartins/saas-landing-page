/**
 * Billing toggle module
 * Handles monthly/annual pricing toggle
 */

import { getElement, getAllElements } from "./utils.js";

export function initBillingToggle() {
  const billingToggle = getElement("billingToggle", "Billing toggle");
  const precosElementos = getAllElements(
    ".price[data-mensal]",
    "pricing elements"
  );

  if (!billingToggle || precosElementos.length === 0) return;

  billingToggle.addEventListener("click", () => {
    const anualAtivo = billingToggle.getAttribute("aria-checked") === "true";
    const novoEstado = !anualAtivo;

    billingToggle.setAttribute("aria-checked", novoEstado);

    precosElementos.forEach((precoEl) => {
      const valorNode = precoEl.querySelector(".price-valor");
      const valorAntigoNode = precoEl.querySelector(".price-valor-antigo");

      if (!valorNode || !valorAntigoNode) return;

      const valorMensal = precoEl.dataset.mensal;
      const valorAnual = precoEl.dataset.anual;

      const temDesconto = valorMensal !== valorAnual;

      if (novoEstado && temDesconto) {
        valorAntigoNode.textContent = valorMensal;
        valorAntigoNode.classList.add("price-valor-antigo--visivel");
        valorNode.textContent = valorAnual;
      } else {
        valorAntigoNode.classList.remove("price-valor-antigo--visivel");
        valorNode.textContent = novoEstado ? valorAnual : valorMensal;
      }
    });
  });
}
