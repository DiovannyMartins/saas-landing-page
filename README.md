# DevBlog - Professional Web Project Structure

A professional web project built with pure HTML5, CSS3, and JavaScript (ES Modules), following modern market standards and best practices.

## Project Structure

```
├── assets/
│   └── images/
│       └── favicon.svg
├── css/
│   ├── base/
│   │   ├── variables.css    # CSS variables with dark mode support
│   │   ├── reset.css        # CSS reset/normalize
│   │   └── typography.css   # Typography system
│   ├── layout/
│   │   ├── container.css    # Container system
│   │   └── grid.css         # Grid and Flexbox utilities
│   ├── components/
│   │   ├── button.css       # Button component (BEM)
│   │   ├── card.css         # Card component (BEM)
│   │   ├── header.css       # Header component (BEM)
│   │   ├── search.css       # Search input component (BEM)
│   │   ├── loading.css      # Loading states and skeletons
│   │   └── theme-toggle.css # Dark mode toggle
│   └── main.css             # Main CSS entry point
├── js/
│   ├── api.js               # API module with async/await
│   ├── dom.js               # DOM manipulation module
│   ├── utils.js             # Utility functions
│   └── main.js              # Main entry point
└── index.html               # Semantic HTML5 with SEO
```

## Features

### Architecture
- **Modular CSS**: Componentized with base/, layout/, components/ structure
- **ES Modules**: JavaScript organized in separate modules with import/export
- **BEM Methodology**: Consistent naming convention for CSS classes
- **Mobile-First**: Responsive design using min-width media queries

### CSS
- **CSS Variables**: Centralized design tokens with dark mode support
- **Flexbox & Grid**: Modern layout techniques
- **Component-Based**: Reusable UI components
- **Custom Properties**: Theme switching with data-theme attribute

### JavaScript
- **ES Modules**: Modern import/export syntax
- **Async/Await**: Robust error handling with try/catch
- **Event Delegation**: Performant event handling
- **Modern Array Methods**: filter, map for data manipulation
- **Clean Code**: Well-documented with JSDoc comments

### Accessibility
- **Semantic HTML5**: header, nav, main, section, article, footer
- **ARIA Attributes**: aria-label, aria-expanded, aria-live, aria-hidden
- **Skip Navigation**: Skip link for keyboard users
- **Focus States**: Visible focus indicators
- **Screen Reader Support**: sr-only class for hidden content

### SEO
- **Meta Tags**: Description, theme-color, canonical URL
- **Open Graph**: Social sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Semantic Markup**: Proper heading hierarchy

## Getting Started

Simply open `index.html` in a modern browser. No build tools required.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
