/* ===== MENU MOBILE ===== */

const menuToggle = document.getElementById("menuToggle");
const navMenuWrapper = document.querySelector(".nav-menu-wrapper");

menuToggle.addEventListener("click", () => {
  navMenuWrapper.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link/botão dentro dele
navMenuWrapper.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenuWrapper.classList.remove("active");
  });
});

/* ===== HEADER COM EFEITO AO ROLAR ===== */

const navbar = document.querySelector(".navbar");
const SCROLL_MINIMO = 20;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > SCROLL_MINIMO);
});

/* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ===== CONTADOR ANIMADO NAS MÉTRICAS ===== */

const metricasNumeros = document.querySelectorAll(
  ".metric-item h3:not(.metric-fixo)",
);
const DURACAO_ANIMACAO_MS = 1500;

function animarContador(elemento) {
  const valorFinal = parseFloat(elemento.dataset.valor);
  const prefixo = elemento.dataset.prefixo || "";
  const sufixo = elemento.dataset.sufixo || "";
  const casasDecimais = elemento.dataset.valor.includes(".") ? 1 : 0;

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

// Só anima quando a seção de métricas entra na tela (evita animar fora de vista)
const metricasObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        metricasNumeros.forEach((numero) => animarContador(numero));
        observer.disconnect(); // anima só uma vez
      }
    });
  },
  { threshold: 0.5 },
);

const metricsSection = document.querySelector(".metrics");
if (metricsSection) {
  metricasObserver.observe(metricsSection);
}

/* ===== TOGGLE DE BILLING (MENSAL / ANUAL) ===== */

const billingToggle = document.getElementById("billingToggle");
const precosElementos = document.querySelectorAll(".price[data-mensal]");

billingToggle.addEventListener("click", () => {
  const anualAtivo = billingToggle.getAttribute("aria-checked") === "true";
  const novoEstado = !anualAtivo;

  billingToggle.setAttribute("aria-checked", novoEstado);

  precosElementos.forEach((precoEl) => {
    const valorNode = precoEl.querySelector(".price-valor");
    const valorAntigoNode = precoEl.querySelector(".price-valor-antigo");

    const valorMensal = precoEl.dataset.mensal;
    const valorAnual = precoEl.dataset.anual;

    if (novoEstado) {
      // Modo anual: mostra o preço mensal riscado + o preço anual em destaque
      valorAntigoNode.textContent = valorMensal;
      valorAntigoNode.classList.add("price-valor-antigo--visivel");
      valorNode.textContent = valorAnual;
    } else {
      // Modo mensal: esconde o riscado, mostra só o valor normal
      valorAntigoNode.classList.remove("price-valor-antigo--visivel");
      valorNode.textContent = valorMensal;
    }

    // Pequeno destaque de cor no valor novo, pra chamar atenção da troca
    valorNode.classList.add("price-valor--destacado");
    setTimeout(() => {
      valorNode.classList.remove("price-valor--destacado");
    }, 600);
  });
});

/* ===== SCROLL SPY (link ativo no menu) ===== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" },
);

sections.forEach((section) => spyObserver.observe(section));
