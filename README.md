# 🎨 Portfolio Profissional - Guia de Implementação Completo

Adriano Cruz | Full-Stack PHP Developer & Tech Lead

---

## 📋 Arquivo de Estrutura (Directory Structure)

```
portfolio/
├── index.html                    # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css           # Main stylesheet
│   ├── js/
│   │   ├── i18n.js             # Internationalization (PT-BR/EN)
│   │   └── scripts.js           # Main JavaScript
│   ├── img/
│   │   ├── favicon.ico          # Website favicon
│   │   ├── darkLogo.png         # AC Logo
│   │   ├── profile/
│   │   │   └── ImagemAtualPolo.jpg  # Profile photo
│   │   └── proj/
│   │       ├── proj_mock_first.png
│   │       ├── proj_mock_second.png
│   │       ├── proj_mock_third.png
│   │       └── proj_mock_fourth.png
│   └── ...

```

---

## 🚀 Quick Start

### 1. **Copy HTML File**
```bash
# Copy portfolio_index_melhorado.html to your web server as index.html
cp portfolio_index_melhorado.html /var/www/html/index.html
```

### 2. **Copy JavaScript Files**
```bash
# Create directories
mkdir -p assets/js
mkdir -p assets/css
mkdir -p assets/img/profile
mkdir -p assets/img/proj

# Copy JS files
cp i18n.js assets/js/i18n.js
cp scripts.js assets/js/scripts.js  # (see below for scripts.js content)
```

### 3. **Add Images**
- Place your profile photo at: `assets/img/profile/ImagemAtualPolo.jpg`
- Place project mockups at: `assets/img/proj/proj_mock_*.png`
- Place your logo at: `assets/img/darkLogo.png`

### 4. **Add CSS**
- Create `assets/css/styles.css` (see content below)

---

## 🎯 Key Features

✅ **Bilingual Support (PT-BR / EN)**
- Toggle language with button in header
- All content translatable via i18n.js
- Language persists via localStorage

✅ **Responsive Design**
- Mobile-first approach
- Desktop, tablet, and mobile optimized
- Touch-friendly navigation

✅ **Accessibility**
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support

✅ **Performance**
- Minimal dependencies (Bootstrap Icons only)
- Fast load times
- SEO optimized metadata

✅ **Recruitment Optimized**
- 10+ years experience highlighted
- Visa sponsorship status clear
- Multiple contact methods
- Professional achievements showcase

---

## 📝 Customization Guide

### Change Content
1. Edit `index.html` directly
2. Update project links in the projects section
3. Modify contact information in the contact section

### Update Translations
1. Edit `i18n.js`
2. Add new keys to both `en` and `pt` objects
3. Update corresponding `data-i18n` attributes in HTML

### Customize Colors & Styling
1. Edit `assets/css/styles.css`
2. Modify CSS variables for theme
3. Test in both light/dark modes

### Add New Projects
1. Add new project card in projects section
2. Update translations for new project
3. Add project mockup image

---

## 🎨 CSS Structure (Basic Template)

Here's the basic CSS structure you should create in `assets/css/styles.css`:

```css
/* Root Variables */
:root {
    --color-primary: #0a84ff;
    --color-secondary: #34c759;
    --color-bg-dark: #1e1e2e;
    --color-bg-light: #ffffff;
    --color-text-dark: #ffffff;
    --color-text-light: #000000;
    --color-border: rgba(255, 255, 255, 0.1);
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
    --transition: all 0.3s ease;
}

[data-theme="light"] {
    --color-bg: var(--color-bg-light);
    --color-text: var(--color-text-light);
}

[data-theme="dark"] {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
}

/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    background-color: var(--color-bg);
    color: var(--color-text);
    transition: var(--transition);
    line-height: 1.6;
}

html {
    scroll-behavior: smooth;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(30, 30, 46, 0.95);
    backdrop-filter: blur(10px);
    padding: var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__nav {
    flex: 1;
    display: flex;
    gap: var(--spacing-lg);
}

.menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-md);
}

.menu__link {
    text-decoration: none;
    color: var(--color-text);
    padding: var(--spacing-xs) var(--spacing-sm);
    transition: var(--transition);
}

.menu__link:hover {
    color: var(--color-primary);
}

.menu__link.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
}

/* Hero Section */
.hero {
    padding-top: 120px;
    padding-bottom: var(--spacing-xl);
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero__content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.hero__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}

.hero__subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-lg);
}

.hero__avatar {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid var(--color-primary);
}

.avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Buttons */
.btn {
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    transition: var(--transition);
    font-weight: 600;
}

.btn--primary {
    background: var(--color-primary);
    color: white;
}

.btn--primary:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

.btn--secondary {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
    background: var(--color-primary);
    color: white;
}

/* Projects Section */
.projects {
    padding: var(--spacing-xl) 0;
}

.projects__container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: var(--spacing-lg);
}

.projects__card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.projects__card.card--reverse {
    grid-template-columns: 1fr 1fr;
    direction: rtl;
}

.projects__card.card--reverse > * {
    direction: ltr;
}

.card__cover {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
}

.card__title {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.card__description {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-md);
}

.card__buttons {
    display: flex;
    gap: var(--spacing-sm);
}

/* Achievements */
.achievements {
    padding: var(--spacing-xl) 0;
}

.achievements__grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
}

.achievement__card {
    text-align: center;
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.achievement__icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-sm);
    color: var(--color-primary);
}

.achievement__card h3 {
    font-size: 2rem;
    margin-bottom: var(--spacing-sm);
}

/* About Section */
.about {
    padding: var(--spacing-xl) 0;
}

.about__container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.about__photo {
    width: 100%;
    border-radius: 12px;
    border: 3px solid var(--color-primary);
}

.about__badges {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-lg);
}

.badge {
    padding: var(--spacing-sm);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

/* Contact Section */
.contact {
    padding: var(--spacing-xl) 0;
    text-align: center;
}

.contact__methods {
    max-width: 1200px;
    margin: var(--spacing-lg) auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.contact__method {
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    transition: var(--transition);
}

.contact__method:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-4px);
}

.contact__method i {
    font-size: 2rem;
    color: var(--color-primary);
}

/* Footer */
.footer {
    padding: var(--spacing-lg);
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid var(--color-border);
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .header__nav {
        display: none;
    }

    .nav--mobile {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: rgba(30, 30, 46, 0.95);
        backdrop-filter: blur(10px);
        z-index: 999;
    }

    .menu--mobile {
        display: flex !important;
        justify-content: space-around;
        padding: var(--spacing-md) 0;
    }

    .hero__content {
        grid-template-columns: 1fr;
    }

    .hero__title {
        font-size: 2rem;
    }

    .projects__card {
        grid-template-columns: 1fr;
    }

    .about__container {
        grid-template-columns: 1fr;
    }

    .hero {
        padding-bottom: 80px;
    }
}

/* Dark/Light Theme Toggle */
.theme-toggle,
.language-toggle {
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition);
}

.theme-toggle:hover,
.language-toggle:hover {
    color: var(--color-primary);
    transform: rotate(20deg);
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--color-primary);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: var(--transition);
    z-index: 500;
}

.back-to-top.show {
    display: flex;
}

.back-to-top:hover {
    transform: translateY(-5px);
}
```

---

## 📄 JavaScript - scripts.js Content

Create `assets/js/scripts.js` with:

```javascript
// Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active Menu Link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        document.querySelectorAll('.menu__link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Smooth scroll for mobile navigation
if (window.innerWidth <= 768) {
    document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu if needed
        });
    });
}
```

---

## 🔍 SEO Optimization

The portfolio includes:
- ✅ Meta tags for title, description, keywords
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML5 structure
- ✅ Accessible alt text for images
- ✅ Proper heading hierarchy
- ✅ Fast load times
- ✅ Mobile responsive design

---

## 🌐 Deployment

### Option 1: GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/adrianocruzweb/portfolio.git
git push -u origin main
```

Enable GitHub Pages from repository settings.

### Option 2: Netlify
1. Connect GitHub repository
2. Build command: (leave empty)
3. Publish directory: (root)

### Option 3: Self-hosted
```bash
scp -r portfolio/ user@server:/var/www/html/
```

---

## 📞 Support & Next Steps

1. **Customize all content** to match your current experience
2. **Add your images** (profile photo, project mockups)
3. **Update links** to your actual projects and social profiles
4. **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)
5. **Test on mobile devices** for responsiveness
6. **Deploy to your server** or GitHub Pages

---

**Last Updated:** September 2026  
**Portfolio Version:** 2.0 - Bilingual Professional
