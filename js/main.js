/* ── TRADUCCIONES ─────────────────────────────────────── */
    const translations = {
      es: {
        'nav-services':   'Servicios',
        'nav-projects':   'Proyectos',
        'nav-contact':    'Contacto',
        'hero-tag':       'Agencia UX/UI',
        'hero-sub':       'Creamos interfaces y experiencias digitales que ponen a las personas primero — simples, honestas y extraordinariamente bien pensadas.',
        'hero-cta':       'Ver proyectos',
        'services-title': 'Lo que hacemos',
        'services-sub':   'Cada proyecto es único. Adaptamos nuestro proceso para resolver el problema correcto.',
        's1-title':       'Investigación UX',
        's1-desc':        'Entendemos a los usuarios antes de diseñar. Entrevistas, pruebas de usabilidad y análisis de comportamiento para tomar decisiones informadas.',
        's2-title':       'Diseño de Interfaces',
        's2-desc':        'Creamos interfaces visuales claras, consistentes y atractivas. Sistemas de diseño escalables que evolucionan con tu producto.',
        's3-title':       'Prototipado',
        's3-desc':        'Del concepto al prototipo funcional en días. Iteramos rápido para validar ideas antes de invertir en desarrollo.',
        'projects-title': 'Trabajo selecto',
        'projects-all':   'Ver todos los proyectos →',
        'p1-title':       'Plataforma de onboarding — Fintech',
        'p1-desc':        'Rediseño completo del flujo de registro para reducir la tasa de abandono en un 40%.',
        'p2-title':       'Dashboard analítico — SaaS B2B',
        'p2-desc':        'Sistema de diseño y UI para visualización de datos complejos en tiempo real.',
        'p3-title':       'App de bienestar — Startup',
        'p3-desc':        'Investigación, prototipado y diseño final de una app de hábitos para iOS y Android.',
        'p4-title':       'E-commerce de moda — Retail',
        'p4-desc':        'Optimización del checkout y experiencia de producto para aumentar conversión.',
        'contact-title':  '¿Tenés un proyecto <em>en mente?</em>',
        'contact-desc':   'Contanos de qué se trata. Nos tomamos el tiempo de entender cada desafío antes de proponer cualquier solución.',
        'contact-cta':    'Escribinos',
        'footer-copy':    '© 2026 HECA. Todos los derechos reservados.',
        phrases: [
          { text: "Diseño que \ncomunica,",      accent: 6  },
          { text: "Experiencias \nque conectan.", accent: 12 }
        ]
      },
      en: {
        'nav-services':   'Services',
        'nav-projects':   'Projects',
        'nav-contact':    'Contact',
        'hero-tag':       'UX/UI Agency',
        'hero-sub':       'We create digital interfaces and experiences that put people first — simple, honest, and extraordinarily well thought out.',
        'hero-cta':       'View projects',
        'services-title': 'What we do',
        'services-sub':   'Every project is unique. We adapt our process to solve the right problem.',
        's1-title':       'UX Research',
        's1-desc':        'We understand users before designing. Interviews, usability testing, and behavior analysis to make informed decisions.',
        's2-title':       'Interface Design',
        's2-desc':        'We create clear, consistent, and attractive visual interfaces. Scalable design systems that evolve with your product.',
        's3-title':       'Prototyping',
        's3-desc':        'From concept to functional prototype in days. We iterate fast to validate ideas before investing in development.',
        'projects-title': 'Selected work',
        'projects-all':   'View all projects →',
        'p1-title':       'Onboarding platform — Fintech',
        'p1-desc':        'Complete redesign of the registration flow to reduce the abandonment rate by 40%.',
        'p2-title':       'Analytics dashboard — B2B SaaS',
        'p2-desc':        'Design system and UI for complex real-time data visualization.',
        'p3-title':       'Wellness app — Startup',
        'p3-desc':        'Research, prototyping, and final design of a habits app for iOS and Android.',
        'p4-title':       'Fashion e-commerce — Retail',
        'p4-desc':        'Checkout optimization and product experience to increase conversion.',
        'contact-title':  'Got a project <em>in mind?</em>',
        'contact-desc':   'Tell us about it. We take the time to understand each challenge before proposing any solution.',
        'contact-cta':    'Get in touch',
        'footer-copy':    '© 2026 HECA. All rights reserved.',
        phrases: [
          { text: "Design that \ncommunicates,", accent: 6  },
          { text: "Experiences that \nconnect.",  accent: 11 }
        ]
      }
    };

    /* ── ESTADO DE IDIOMA ─────────────────────────────────── */
    let currentLang = 'es';

    function setLang(lang) {
      currentLang = lang;
      const t = translations[lang];

      // Texto plano
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
      });

      // HTML (para elementos con <em> u otras etiquetas)
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) el.innerHTML = t[key];
      });

      // Reiniciar la máquina de escribir con las frases del nuevo idioma
      phraseIndex = 0;
      charIndex   = 0;
      isDeleting  = false;
      clearTimeout(typeTimer);
      textEl.innerHTML = '';
      typeTimer = setTimeout(tick, 300);

      // Actualizar el botón
      document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
    }

    document.getElementById('langToggle').addEventListener('click', () => {
      setLang(currentLang === 'es' ? 'en' : 'es');
    });

    /* ── MÁQUINA DE ESCRIBIR ──────────────────────────────── */
    const phrases = translations[currentLang].phrases;

    const textEl = document.querySelector('.typewriter-text');

    const TYPING_SPEED       = 65;
    const DELETE_SPEED       = 30;
    const PAUSE_AFTER_TYPE   = 1800;
    const PAUSE_AFTER_DELETE = 350;

    let phraseIndex = 0;
    let charIndex   = 0;
    let isDeleting  = false;
    let typeTimer   = null;

    function render(slice, accentLen) {
      let html;
      if (slice.length <= accentLen) {
        html = `<em>${slice}</em>`;
      } else {
        html = `<em>${slice.slice(0, accentLen)}</em>${slice.slice(accentLen)}`;
      }
      return html.replace('\n', '<br>');
    }

    function tick() {
      const currentPhrases = translations[currentLang].phrases;
      const { text, accent } = currentPhrases[phraseIndex];

      if (!isDeleting) {
        charIndex++;
        textEl.innerHTML = render(text.slice(0, charIndex), accent);

        if (charIndex === text.length) {
          isDeleting = true;
          typeTimer = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        typeTimer = setTimeout(tick, TYPING_SPEED);

      } else {
        charIndex--;
        textEl.innerHTML = render(text.slice(0, charIndex), accent);

        if (charIndex === 0) {
          isDeleting  = false;
          phraseIndex = (phraseIndex + 1) % currentPhrases.length;
          typeTimer = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        typeTimer = setTimeout(tick, DELETE_SPEED);
      }
    }

    tick();

    /* ── PARALLAX GRILLA + CAPAS ─────────────────────────── */
    const heroGrid    = document.querySelector('.hero-grid');
    const layers      = document.querySelectorAll('.layer');
    const layerSpeeds = [0.02, 0.08, 0.16, 0.26, 0.38];
    let ticking = false;

    function updateScroll() {
      const y = window.scrollY;

      // Parallax grilla
      heroGrid.style.transform = `translateY(${y * 0.25}px)`;

      // Parallax capas — cada capa se mueve a distinta velocidad
      // creando el efecto de explosión de capas tipo Figma
      layers.forEach((layer, i) => {
        layer.style.transform = `translateY(${y * layerSpeeds[i]}px)`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }, { passive: true });
