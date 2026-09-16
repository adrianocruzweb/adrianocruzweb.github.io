/* ═══════════════════════════════════════════════════════════════════════════
   ADRIANO CRUZ - PORTFOLIO JAVASCRIPT (CORRIGIDO)
   Theme Toggle + Language Toggle + Logo Invert
   ═══════════════════════════════════════════════════════════════════════════ */

// ──────────────────────────────────────────────────────────────────────────
// 1. THEME TOGGLE (Dark/Light Mode) - COM SCROLL DETECTOR
// ──────────────────────────────────────────────────────────────────────────

function initThemeToggle() {
    const toggleTheme = document.getElementById('toggleTheme');
    const html = document.documentElement;

    // Get saved theme or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (toggleTheme) {
        toggleTheme.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);

            console.log(`✅ Theme changed to: ${newTheme}`);
        });
    }
}

function applyTheme(theme) {
    const html = document.documentElement;
    const toggleTheme = document.getElementById('toggleTheme');
    const brandLogo = document.querySelector('.brand__logo');

    // Aplica o tema ao html
    html.setAttribute('data-theme', theme);

    // Atualiza o ícone
    if (toggleTheme) {
        if (theme === 'dark') {
            toggleTheme.innerHTML = '<i class="bi bi-sun-fill"></i>';
            toggleTheme.title = 'Switch to Light Mode';
        } else {
            toggleTheme.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
            toggleTheme.title = 'Switch to Dark Mode';
        }
    }

    // Inverte o logo se necessário
    if (brandLogo) {
        if (theme === 'light') {
            brandLogo.style.filter = 'invert(1) brightness(1.2)';
            brandLogo.style.transition = 'filter 0.3s ease-in-out';
        } else {
            brandLogo.style.filter = 'invert(0) brightness(1)';
            brandLogo.style.transition = 'filter 0.3s ease-in-out';
        }
    }

    console.log(`🎨 Theme applied: ${theme}, Logo inverted: ${theme === 'light'}`);
}

// ──────────────────────────────────────────────────────────────────────────
// 2. LANGUAGE TOGGLE (PT-BR / EN)
// ──────────────────────────────────────────────────────────────────────────

function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');

    // Get saved language or default to 'pt'
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage, false);

    if (languageToggle) {
        languageToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLanguage = localStorage.getItem('language') || 'pt';
            const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
            setLanguage(newLanguage);
        });
    }
}

function setLanguage(lang, updateStorage = true) {
    const html = document.documentElement;
    html.lang = lang === 'en' ? 'en' : 'pt-br';

    if (updateStorage) {
        localStorage.setItem('language', lang);
    }

    updateLanguageUI(lang);
    applyTranslations(lang);
    console.log(`🌐 Language changed to: ${lang}`);
}

function updateLanguageUI(lang) {
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'en' ? 'PT' : 'EN';
    }
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang]?.[key];

        if (translation) {
            // Preserve inner HTML if it has child elements
            if (el.children.length === 0) {
                el.textContent = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// 3. TRANSLATIONS DATABASE
// ──────────────────────────────────────────────────────────────────────────

const translations = {
    pt: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projetos',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',

        // Hero
        'hero.title': 'Especializado em <b>Desenvolvimento Web Full-Stack</b>',
        'hero.subtitle': '10+ anos de experiência em PHP, Laravel, CakePHP & Drupal. Tech Lead | Apaixonado por código limpo & soluções escaláveis.',
        'hero.location': 'Campo Grande, Brasil',
        'hero.experience': '10+ Anos de Experiência',
        'hero.visa': 'Aberto a H-1B/TN/Work Permit',
        'hero.cta': 'Ver Projetos',
        'hero.hire': 'Me Contrate',

        // Tech Stack
        'tech.title': 'Principais Tecnologias',
        'tech.subtitle': 'Especializado em frameworks e ferramentas modernas',
        'tech.backend': 'Back-End',
        'tech.frontend': 'Front-End',
        'tech.database': 'Bancos de Dados',
        'tech.devops': 'DevOps & Ferramentas',

        // Projects
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Destacando meus melhores trabalhos',

        // About
        'about.title': 'Sobre Mim',
        'about.certified': 'Profissional Certificado',
        'about.remote': 'Pronto para Remoto',
        'about.available': 'Disponível para Trabalho',

        // Contact
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Estou disponível para novos projetos',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.follow': 'Me Siga',

        // Footer
        'footer.copyright': '© 2024 Direitos Reservados',
        'footer.note': 'Aberto a oportunidades internacionais'
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'Specializing in <b>Full-Stack Web Development</b>',
        'hero.subtitle': '10+ years of expertise in PHP, Laravel, CakePHP & Drupal. Tech Lead | Passionate about clean code & scalable solutions.',
        'hero.location': 'Campo Grande, Brazil',
        'hero.experience': '10+ Years Experience',
        'hero.visa': 'Open to H-1B/TN/Work Permit',
        'hero.cta': 'View Projects',
        'hero.hire': 'Hire Me',

        // Tech Stack
        'tech.title': 'Core Technologies',
        'tech.subtitle': 'Specialized in modern web development frameworks',
        'tech.backend': 'Back-End',
        'tech.frontend': 'Front-End',
        'tech.database': 'Databases',
        'tech.devops': 'DevOps & Tools',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Highlighting my best work',

        // About
        'about.title': 'About Me',
        'about.certified': 'Certified Professional',
        'about.remote': 'Remote Ready',
        'about.available': 'Available for Work',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'I\'m available for new projects',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.follow': 'Follow Me',

        // Footer
        'footer.copyright': '© 2024 All Rights Reserved',
        'footer.note': 'Open to international opportunities'
    }
};

// ──────────────────────────────────────────────────────────────────────────
// 4. BACK TO TOP BUTTON
// ──────────────────────────────────────────────────────────────────────────

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// 5. ACTIVE MENU LINK
// ──────────────────────────────────────────────────────────────────────────

function initActiveMenuLink() {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set initial active link
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
}

// ──────────────────────────────────────────────────────────────────────────
// 6. SMOOTH SCROLL SPY
// ──────────────────────────────────────────────────────────────────────────

function initSmoothScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-60px 0px -66%'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ──────────────────────────────────────────────────────────────────────────
// 7. HEADER SHADOW ON SCROLL - ✅ NOVO
// ──────────────────────────────────────────────────────────────────────────

function initHeaderShadow() {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// 8. INITIALIZATION
// ──────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Portfolio...');

    // Initialize all features
    initThemeToggle();
    initLanguageToggle();
    initBackToTop();
    initActiveMenuLink();
    initSmoothScrollSpy();
    initHeaderShadow();

    console.log('✅ Portfolio initialized successfully!');
    logInfo();
});

// ──────────────────────────────────────────────────────────────────────────
// 9. UTILS
// ──────────────────────────────────────────────────────────────────────────

function logInfo() {
    console.log('%c Adriano Cruz Portfolio', 'font-size: 20px; font-weight: bold; color: #0a84ff;');
    console.log('%c Full-Stack PHP Developer | 10+ Years Experience', 'font-size: 14px; color: #34c759;');
    console.log('%c Theme: ' + (document.documentElement.getAttribute('data-theme') || 'dark'), 'font-size: 12px;');
    console.log('%c Language: ' + (localStorage.getItem('language') || 'pt'), 'font-size: 12px;');
}

/* ═══════════════════════════════════════════════════════════════════════════
   END OF JAVASCRIPT
   ═════════════════════════════════════════════════════════════════════════ */