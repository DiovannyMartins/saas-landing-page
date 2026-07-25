# SaaS Landing Page

Landing page profissional para produto SaaS, desenvolvida com HTML5, CSS3 e JavaScript (ES Modules), com design moderno inspirado em plataformas como Vercel e Stripe.

**Acesse:** [diovannymartins.github.io/saas-landing-page](https://diovannymartins.github.io/saas-landing-page/)

## Tecnologias

- HTML5 semantico
- CSS3 (Mobile-First, BEM)
- JavaScript (ES Modules)

## Estrutura do Projeto

```
├── assets/
│   └── favicon.svg
├── css/
│   └── style.css
├── src/
│   └── scripts/
│       ├── main.js
│       └── modules/
│           ├── billing.js
│           ├── counter.js
│           ├── menu.js
│           ├── scroll.js
│           ├── scrollspy.js
│           └── utils.js
└── index.html
```

## Funcionalidades

- **Menu mobile responsivo** com aria-expanded e aria-controls
- **Header com efeito ao rolar** (sombra e blur dinâmicos)
- **Scroll reveal** com IntersectionObserver
- **Contador animado nas metricas**, disparado ao entrar na tela
- **Toggle de billing mensal/anual**, com preco antigo riscado
- **Scroll spy** com link ativo no menu
- **Skip navigation link** para acessibilidade
- **Focus visible** para navegacao por teclado
- **Meta tags Open Graph e Twitter Card** para SEO
- **Totalmente responsivo** (Mobile-First)

## Padroes Adotados

- **BEM** (Block Element Modifier) para nomenclatura CSS
- **Mobile-First** com media queries `min-width`
- **ES Modules** com `import/export`
- **Clean Code** com validacao de elementos e throttle
- **WCAG AA** de contraste e acessibilidade
- **HTML semantico** com landmarks, article, blockquote

## Versoes

- **[v1.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v1.0.0)** — Versao inicial, 100% HTML5 e CSS3
- **[v2.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v2.0.0)** — JavaScript: scroll reveal, contador animado, toggle de billing e scroll spy
- **[v3.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v3.0.0)** — Auditoria profissional: ES Modules, Mobile-First, BEM, SEO e acessibilidade

## Autor

Diovanny Martins
