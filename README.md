# NexaSaaS Landing Page

Landing page profissional para produto SaaS, desenvolvida com HTML, CSS e JavaScript puro (Vanilla), focada em performance, acessibilidade e organização de código.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [![Responsive](https://img.shields.io/badge/Responsive-Sim-green?style=for-the-badge)](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## Destaques

- 100% JavaScript Vanilla
- Zero dependências
- Mobile First
- Dark/Light Mode
- Acessível (WCAG AA)
- SEO otimizado
- CSS componentizado (BEM)
- ES Modules

---

## Demo

[Ver ao vivo](https://diovannymartins.github.io/saas-landing-page/)

---

## Tecnologias

| Stack | Detalhe |
|-------|---------|
| HTML5 | Semântica, ARIA, meta tags Open Graph/Twitter Card |
| CSS3 | Variáveis CSS, Grid, Flexbox, animações, `@import` modular, BEM |
| JavaScript (ES6+) | ES Modules, async/await, IntersectionObserver, sem dependências externas |
| Git/GitHub | Versionamento e deploy via GitHub Pages |
| Google Fonts | Inter (títulos e corpo) |

---

## Sobre o projeto

O projeto foi desenvolvido com foco em simplicidade, desempenho e facilidade de avaliação, dispensando etapas de build ou dependências externas. As decisões técnicas principais:

- **Zero dependências**: nenhum framework, nenhum build step. Abre o `index.html` e funciona.
- **CSS modular com `@import`**: base (reset, variáveis, acessibilidade), layout (container, seções) e componentes (header, hero, features, pricing, etc.) separados em arquivos independentes. Facilita manutenção e leitura.
- **JavaScript em ES Modules**: cada funcionalidade (tema, menu, scroll, contador, billing, API) vive em seu próprio módulo. O `main.js` apenas inicializa — sem acoplamento.
- **Dark Mode com anti-FOUC**: o script de tema respeita a preferência do sistema e persiste a escolha do usuário via `localStorage`.
- **Acessibilidade como requisito, não extra**: skip link, ARIA labels, `aria-live` no billing toggle, `aria-expanded` no menu, focus visible customizado.
- **Performance**: `preconnect` para fontes, `requestAnimationFrame` nos contadores, `IntersectionObserver` para scroll reveal e scroll spy, throttle no scroll listener.

---

## Funcionalidades

- **Dark/Light mode** com persistência via `localStorage` e respeito à preferência do sistema
- **Menu mobile** com animação e fechamento ao clicar fora ou pressionar Escape
- **Scroll spy** que destaca o link do menu conforme a seção visível
- **Scroll reveal** nas seções ao rolar a página (IntersectionObserver)
- **Contadores animados** nas métricas, disparados ao entrar na viewport
- **Toggle de billing** mensal/anual com preço antigo riscado e anúncio para screen readers
- **API simulation** com async/await, try/catch e error handling robusto
- **Renderização dinâmica** de testimonials via DOM manipulation
- **Skip link** para navegação por teclado
- **SEO**: Open Graph, Twitter Card, canonical URL, meta description

---

## Como rodar localmente

Pré-requisitos: nenhum. Apenas um navegador moderno.

```bash
# 1. Clone o repositório
git clone https://github.com/DiovannyMartins/saas-landing-page.git

# 2. Entre na pasta
cd saas-landing-page

# 3. Abra no navegador
# Opção A: duplo clique no index.html
# Opção B: Live Server no VS Code (recomendado para desenvolvimento)
```

Não há `npm install`, não há build, não há variáveis de ambiente. É static-first por design.

---

## Estrutura de pastas

```
saas-landing-page/
├── assets/
│   └── favicon.svg              # Favicon da marca
├── css/
│   ├── base/
│   │   ├── variables.css        # Variáveis CSS (cores, espaçamentos, dark mode)
│   │   ├── reset.css            # Reset e estilos base
│   │   └── accessibility.css    # Skip link, sr-only, focus visible
│   ├── layout/
│   │   ├── container.css        # Container responsivo
│   │   └── sections.css         # Seções base
│   ├── components/
│   │   ├── button.css           # Botões (BEM)
│   │   ├── header.css           # Header e navegação
│   │   ├── hero.css             # Seção hero e mockup
│   │   ├── metrics.css          # Métricas
│   │   ├── features.css         # Features e steps
│   │   ├── testimonials.css     # Depoimentos
│   │   ├── pricing.css          # Preços
│   │   ├── footer.css           # Rodapé
│   │   ├── animations.css       # Scroll reveal
│   │   ├── billing.css          # Toggle mensal/anual
│   │   └── theme.css            # Dark mode toggle
│   └── main.css                 # Entry point (importa todos os módulos)
── src/
│   └── scripts/
│       ├── main.js              # Entry point (inicializa módulos)
│       └── modules/
│           ├── api.js           # Fetch de dados com async/await
│           ├── billing.js       # Toggle de preços
│           ├── counter.js       # Contadores animados
│           ├── dom.js           # Renderização dinâmica
│           ├── menu.js          # Menu mobile
│           ├── scroll.js        # Scroll effects e reveal
│           ├── scrollspy.js     # Navegação ativa
│           ├── theme.js         # Dark/Light mode
│           └── utils.js         # Funções auxiliares (throttle, DOM helpers)
── index.html                   # Página principal
└── README.md
```

---

## O que aprendi

- **Manipulação do DOM** — criação dinâmica de elementos, `DocumentFragment`, XSS prevention
- **Organização de código** — separação em módulos ES6, cada funcionalidade isolada e testável
- **CSS modular** — uso de `@import` para organizar estilos em base, layout e componentes
- **BEM** — nomenclatura consistente (`.block__element--modifier`)
- **Responsividade** — mobile-first com media queries `min-width`, grid e flexbox
- **Acessibilidade** — ARIA labels, navegação por teclado, skip link, `aria-live`, focus management
- **Performance** — `IntersectionObserver`, `requestAnimationFrame`, throttle, lazy loading
- **Persistência de estado** — uso de `localStorage` para manter preferências do usuário entre sessões
- **Async/Await** — consumo de API com `try/catch` e error handling robusto

---

## Autor

**Diovanny Martins** — Desenvolvedor Front-End

- **GitHub:** [@DiovannyMartins](https://github.com/DiovannyMartins)
- **LinkedIn:** [Diovanny Martins](https://linkedin.com/in/diovanny-martins)
- **E-mail:** [diovannydev@gmail.com](mailto:diovannydev@gmail.com)

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
