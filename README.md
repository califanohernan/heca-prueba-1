# HECA — Agencia UX/UI

Landing page institucional de **HECA**, agencia de diseño UX/UI especializada en investigación, diseño de interfaces y prototipado. Presenta los servicios, proyectos seleccionados y un canal de contacto directo, con soporte bilingüe español/inglés.

**Demo en vivo:** [https://heca-prueba-1.vercel.app](https://heca-prueba-1.vercel.app)

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Estructura | HTML5 semántico |
| Estilos | CSS3 — custom properties, Flexbox, Grid, animaciones |
| Comportamiento | JavaScript vanilla (ES6+) |
| Tipografía | Inter (Google Fonts) |
| Deploy | Vercel |

Sin frameworks ni dependencias externas. El sitio corre directamente desde archivos estáticos.

---

## Funcionalidades principales

- **Typewriter animado** en el hero con rotación de frases y efecto de borrado
- **Parallax por capas** inspirado en el explorador de capas de Figma (5 velocidades independientes)
- **Internacionalización (i18n)** con toggle ES / EN sin recarga de página
- **Scroll suave** entre secciones via `scroll-behavior: smooth`
- **Diseño responsivo** adaptado a desktop y mobile
- **Tema oscuro** con paleta consistente definida en CSS custom properties

---

## Estructura del proyecto

```
heca-prueba-1/
├── index.html          # Estructura HTML de la landing page
├── css/
│   └── styles.css      # Todos los estilos (variables, layout, componentes)
├── js/
│   └── main.js         # Lógica: typewriter, parallax, i18n
├── assets/
│   └── images/         # Recursos de imagen
└── README.md
```

---

## Secciones de la página

1. **Header** — Logo + navegación + toggle de idioma
2. **Hero** — Headline animado con typewriter, subtítulo, CTA y decoración de capas con parallax
3. **Servicios** — Investigación UX, Diseño de Interfaces, Prototipado
4. **Proyectos** — Lista de trabajos seleccionados (Fintech, SaaS, Wellness, E-commerce)
5. **Contacto** — CTA directo a `hola@heca.com.ar`
6. **Footer** — Links a Instagram, LinkedIn y Behance

---

## Correr el proyecto localmente

No requiere instalación de dependencias ni servidor de build.

**Opción 1 — Abrir directo en el navegador:**

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**Opción 2 — Servidor local (recomendado para evitar restricciones CORS):**

```bash
# Con Python 3
python3 -m http.server 8080

# Con Node.js (npx)
npx serve .

# Con VS Code
# Instalar la extensión "Live Server" y hacer clic en "Go Live"
```

Luego abrir [http://localhost:8080](http://localhost:8080) en el navegador.

---

## Variables CSS principales

```css
--color-bg:      #141414   /* Fondo principal */
--color-surface: #161616   /* Superficies de cards */
--color-accent:  #e8ff47   /* Amarillo-lima de acento */
--color-text:    #f0f0f0   /* Texto principal */
--color-muted:   #6b6b6b   /* Texto secundario */
--font: 'Inter', 'Helvetica Neue', Arial, sans-serif
```

---

## Contacto

**hola@heca.com.ar** · [Instagram](https://www.instagram.com/hernancalifano) · [LinkedIn](https://www.linkedin.com/in/hernancalifano/) · [Behance](https://www.behance.net/hernancalifano)
