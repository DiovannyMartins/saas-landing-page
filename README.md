# NexaSaaS - Landing Page Profissional

Landing page profissional para produto SaaS, desenvolvida com HTML5, CSS3 e JavaScript (ES Modules), com design moderno inspirado em plataformas como Vercel e Stripe.

**Acesse:** [diovannymartins.github.io/saas-landing-page](https://diovannymartins.github.io/saas-landing-page/)

## Estrutura do Projeto

```
├── assets/
│   └── favicon.svg
├── css/
│   ├── base/
│   │   ├── variables.css      # Design tokens e Dark Mode
│   │   ├── reset.css          # Reset e estilos base
│   │   └── accessibility.css  # Skip-link, sr-only, focus states
│   ├── layout/
│   │   ├── container.css      # Container responsivo
│   │   └── sections.css       # Seções base
│   ├── components/
│   │   ├── button.css         # Botões (BEM)
│   │   ├── header.css         # Navbar e menu mobile
│   │   ├── hero.css           # Hero section e mockup
│   │   ├── metrics.css        # Métricas
│   │   ├── features.css       # Features e steps
│   │   ├── testimonials.css   # Depoimentos
│   │   ├── pricing.css        # Preços
│   │   ├── footer.css         # Footer
│   │   ├── animations.css     # Scroll reveal
│   │   ├── billing.css        # Toggle mensal/anual
│   │   └── theme.css          # Dark mode toggle
│   └── main.css               # Entry point (imports + media queries)
├── src/
│   └── scripts/
│       ├── main.js            # Entry point
│       └── modules/
│           ├── api.js         # Async/await com error handling
│           ├── billing.js     # Toggle mensal/anual
│           ├── counter.js     # Contadores animados
│           ├── menu.js        # Menu mobile
│           ├── scroll.js      # Scroll effects
│           ├── scrollspy.js   # Navegação ativa
│           ├── theme.js       # Dark mode toggle
│           └── utils.js       # Funções auxiliares
└── index.html                 # HTML semântico com SEO e A11y
```

## Tecnologias

- HTML5 semântico
- CSS3 (Mobile-First, BEM, Dark Mode, Componentizado)
- JavaScript (ES Modules, async/await)

## Funcionalidades

- **Menu mobile responsivo** com aria-expanded e aria-controls
- **Header com efeito ao rolar** (sombra e blur dinâmicos)
- **Scroll reveal** com IntersectionObserver
- **Contador animado nas métricas**, disparado ao entrar na tela
- **Toggle de billing mensal/anual**, com preço antigo riscado
- **Scroll spy** com link ativo no menu
- **Dark mode** com toggle e persistência em localStorage
- **Skip navigation link** para acessibilidade
- **Focus visible** para navegação por teclado
- **Meta tags Open Graph e Twitter Card** para SEO
- **API simulation** com async/await e error handling
- **Totalmente responsivo** (Mobile-First)

## Padrões Adotados

### Arquitetura
- **ES Modules** com import/export
- **CSS Componentizado** com base/, layout/, components/
- **Modularização** por responsabilidade
- **Clean Code** com validação de elementos

### CSS
- **BEM** (Block Element Modifier) para nomenclatura
- **Mobile-First** com media queries `min-width`
- **CSS Variables** para design tokens
- **Dark Mode** com `[data-theme="dark"]`
- **@import** para organizar partials

### JavaScript
- **async/await** com try/catch
- **Event Delegation** para performance
- **IntersectionObserver** para scroll effects
- **localStorage** para persistência
- **Throttle** para scroll listeners

### Acessibilidade (WCAG)
- **Skip navigation link**
- **aria-expanded**, **aria-controls**, **aria-label**
- **aria-hidden** para elementos decorativos
- **role="img"** com labels descritivos
- **Focus visible** para navegação por teclado
- **Contraste** melhorado (text-muted: #4b5563)

### SEO
- **Open Graph** meta tags
- **Twitter Card** meta tags
- **Canonical URL**
- **Meta description** otimizada
- **Favicon SVG**

## Versões

- **[v1.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v1.0.0)** — Versão inicial, 100% HTML5 e CSS3
- **[v2.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v2.0.0)** — JavaScript: scroll reveal, contador animado, toggle de billing e scroll spy
- **[v3.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v3.0.0)** — Auditoria profissional: ES Modules, Mobile-First, BEM, SEO e acessibilidade
- **[v4.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v4.0.0)** — Dark mode, API simulation, melhorias de performance
- **[v5.0.0](https://github.com/DiovannyMartins/saas-landing-page/releases/tag/v5.0.0)** — CSS componentizado em módulos organizados

## Autor

Diovanny Martins
