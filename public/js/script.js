/**
 * LUDOVIC — Portfolio Interactions
 * Apple Product Page aesthetic
 */

// ============================================
// TRANSLATIONS (i18n)
// ============================================
const translations = {
    fr: {
        // Navigation
        navAbout: "À propos",
        navDJ: "DJ",
        navMusic: "Musique",
        navTech: "Tech",
        navStreaming: "Streaming",
        navContact: "Contact",

        // Hero
        heroEyebrow: "Portfolio 2026",
        heroBio: "Étudiant au Collège Émilie-Gourd (maturité juin 2026), basé à Genève. Je navigue entre l'événementiel, la tech et le streaming — passionné par l'intersection entre créativité et innovation.",
        heroBtn: "Découvrir",
        badgeMaturite: "Maturité",
        scrollText: "Scroll",

        // DJ Section
        djTitle: "DJ",
        djDesc: "Je mixe depuis janvier 2024, principalement lors de soirées étudiantes à Genève. Mon style couvre tout ce qui est commercial, avec une prédilection pour le rap US.",
        djStyleTitle: "Style musical",
        djStyleDesc: "Sets énergiques orientés dancefloor, transitions fluides entre les hits du moment et les classiques.",
        djExpTitle: "Expérience",
        djExp1: "Soirées étudiantes et événements privés à Genève",
        djExp2: "Sets adaptés à tous types d'audiences",
        djEquipTitle: "Équipement",
        djEquipController: "Contrôleur",
        djEquipSoftware: "Logiciel",
        djBooking: "Booking",

        // Genre tags
        genreRapUS: "Rap US",
        genreHipHop: "Hip-Hop commercial",
        genreRnB: "R&B",
        genreAfrobeats: "Afrobeats",
        genrePop: "Pop",
        genreEDM: "EDM",
        genreReggaeton: "Reggaeton",

        // Music Section
        musicTitle: "Création",
        musicDesc: "Je développe des projets créatifs qui combinent direction artistique, storytelling et identité digitale.",
        musicDiscoTitle: "Highlights",
        musicReleaseType: "Projet",
        musicListen: "Voir",

        // Tech Section
        techTitle: "Tech & AI",
        techIntro: "Je combine passion tech et projets concrets, avec un focus sur l'intelligence artificielle et le développement web.",
        techRole1: "Chief AI Officer",
        techDesc1: "Je gère toute la pipeline IA pour identifier les subsides et régulations environnementales par région.",
        techResp1_1: "Conception et déploiement des modèles d'IA",
        techResp1_2: "Automatisation de la veille réglementaire",
        techResp1_3: "Intégration des outils IA dans les workflows",
        techRole2: "Créateur",
        techDesc2: "Boutique en ligne de l'Association d'élèves d'Émilie-Gourd.",
        techResp2_1: "Développement complet du site e-commerce",
        techResp2_2: "Stack : Shopify + personnalisations custom",
        techResp2_3: "Gestion des commandes et de la logistique",
        techStackTitle: "Stack technique",
        techStackAI: "IA & Coding",
        techStackWeb: "Web",
        techStackTools: "Outils",
        techPhilosophy: "Adepte du <em>vibe coding</em> — une approche intuitive du développement où l'IA assiste la création de code de manière fluide et créative.",

        // Streaming Section
        streamTitle: "Streaming",
        streamDesc: "<strong>Clapegrint</strong> est un collectif de streamers et créateurs de contenu. Je gère la stratégie, le développement de la communauté et les aspects business.",
        streamActivitiesTitle: "Activités",
        streamActivity1: "Multi gaming",
        streamActivity2: "Streams IRL",
        streamActivity3: "Création de contenu court format",
        streamManager: "Manager",
        streamLives: "Lives réguliers",
        streamBehind: "Behind the scenes",
        streamClips: "Clips et moments forts",

        // Social Section
        socialTitle: "Me suivre",
        socialIntro: "Retrouvez-moi sur les réseaux pour suivre mes projets",

        // Contact Section
        contactTitle: "Contact",
        contactIntro: "Pour toute demande professionnelle",
        contactType1: "Booking DJ",
        contactType2: "Collaborations créatives",
        contactType3: "Projets tech & IA",
        contactType4: "Partenariats streaming",
        formName: "Nom",
        formNamePlaceholder: "Votre nom",
        formEmail: "Email",
        formEmailPlaceholder: "votre@email.com",
        formSubject: "Sujet",
        formSubjectPlaceholder: "Choisir un sujet",
        formSubjectOther: "Autre",
        formMessage: "Message",
        formMessagePlaceholder: "Votre message...",
        formSend: "Envoyer un email",

        // Footer
        footerText: "© 2026 Ludovic — DJ · Artiste · Chief AI Officer"
    },
    en: {
        // Navigation
        navAbout: "About",
        navDJ: "DJ",
        navMusic: "Music",
        navTech: "Tech",
        navStreaming: "Streaming",
        navContact: "Contact",

        // Hero
        heroEyebrow: "Portfolio 2026",
        heroBio: "Student at Collège Émilie-Gourd (graduating June 2026), based in Geneva. I navigate between events, tech and streaming — passionate about the intersection of creativity and innovation.",
        heroBtn: "Discover",
        badgeMaturite: "Graduating",
        scrollText: "Scroll",

        // DJ Section
        djTitle: "DJ",
        djDesc: "I've been mixing since January 2024, mainly at student parties in Geneva. My style covers everything commercial, with a preference for US rap.",
        djStyleTitle: "Musical style",
        djStyleDesc: "High-energy dancefloor-oriented sets, smooth transitions between current hits and classics.",
        djExpTitle: "Experience",
        djExp1: "Student parties and private events in Geneva",
        djExp2: "Sets adapted to all types of audiences",
        djEquipTitle: "Equipment",
        djEquipController: "Controller",
        djEquipSoftware: "Software",
        djBooking: "Booking",

        // Genre tags
        genreRapUS: "US Rap",
        genreHipHop: "Commercial Hip-Hop",
        genreRnB: "R&B",
        genreAfrobeats: "Afrobeats",
        genrePop: "Pop",
        genreEDM: "EDM",
        genreReggaeton: "Reggaeton",

        // Music Section
        musicTitle: "Creation",
        musicDesc: "I build creative projects blending artistic direction, storytelling, and digital identity.",
        musicDiscoTitle: "Highlights",
        musicReleaseType: "Project",
        musicListen: "View",

        // Tech Section
        techTitle: "Tech & AI",
        techIntro: "I combine tech passion with concrete projects, focusing on artificial intelligence and web development.",
        techRole1: "Chief AI Officer",
        techDesc1: "I manage the entire AI pipeline to identify subsidies and environmental regulations by region.",
        techResp1_1: "Design and deployment of AI models",
        techResp1_2: "Automation of regulatory monitoring",
        techResp1_3: "Integration of AI tools into workflows",
        techRole2: "Creator",
        techDesc2: "Online store for the Émilie-Gourd Student Association.",
        techResp2_1: "Complete e-commerce site development",
        techResp2_2: "Stack: Shopify + custom modifications",
        techResp2_3: "Order and logistics management",
        techStackTitle: "Tech stack",
        techStackAI: "AI & Coding",
        techStackWeb: "Web",
        techStackTools: "Tools",
        techPhilosophy: "Advocate of <em>vibe coding</em> — an intuitive approach to development where AI assists code creation in a fluid and creative way.",

        // Streaming Section
        streamTitle: "Streaming",
        streamDesc: "<strong>Clapegrint</strong> is a collective of streamers and content creators. I manage strategy, community development and business aspects.",
        streamActivitiesTitle: "Activities",
        streamActivity1: "Multi gaming",
        streamActivity2: "IRL streams",
        streamActivity3: "Short-form content creation",
        streamManager: "Manager",
        streamLives: "Regular lives",
        streamBehind: "Behind the scenes",
        streamClips: "Clips and highlights",

        // Social Section
        socialTitle: "Follow me",
        socialIntro: "Find me on social media to follow my projects",

        // Contact Section
        contactTitle: "Contact",
        contactIntro: "For any professional inquiry",
        contactType1: "DJ Booking",
        contactType2: "Creative collaborations",
        contactType3: "Tech & AI projects",
        contactType4: "Streaming partnerships",
        formName: "Name",
        formNamePlaceholder: "Your name",
        formEmail: "Email",
        formEmailPlaceholder: "your@email.com",
        formSubject: "Subject",
        formSubjectPlaceholder: "Choose a subject",
        formSubjectOther: "Other",
        formMessage: "Message",
        formMessagePlaceholder: "Your message...",
        formSend: "Send an email",

        // Footer
        footerText: "© 2026 Ludovic — DJ · Artist · Chief AI Officer"
    }
};

// ============================================
// LANGUAGE HANDLING
// ============================================
function getStoredLanguage() {
    try {
        return window.localStorage.getItem('portfolioLang');
    } catch (_) {
        return null;
    }
}

function setStoredLanguage(lang) {
    try {
        window.localStorage.setItem('portfolioLang', lang);
    } catch (_) {
        // Ignore storage errors
    }
}

let currentLang = getStoredLanguage() ||
    ((navigator.language || '').startsWith('fr') ? 'fr' : 'en');

function setLanguage(lang) {
    currentLang = lang;
    setStoredLanguage(lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initLanguage() {
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ============================================
// MAIN APP
// ============================================
let appBootstrapped = false;

function initPortfolioApp() {
    if (appBootstrapped) return;
    appBootstrapped = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================
    // LOADING SCREEN
    // ============================================
    const loadingScreen = document.querySelector('.loading-screen');
    let appInitialized = false;

    function finalizeLoading() {
        if (appInitialized) return;
        appInitialized = true;

        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }

        initAnimations();
    }

    window.addEventListener('load', () => {
        window.setTimeout(finalizeLoading, prefersReducedMotion ? 0 : 100);
    });

    if (document.readyState === 'complete') {
        window.setTimeout(finalizeLoading, 0);
    }

    // Safety timeout
    window.setTimeout(finalizeLoading, 2000);

    // Initialize language
    try {
        initLanguage();
    } catch (err) {
        console.warn('Language initialization failed:', err);
    }

    // ============================================
    // MOBILE MENU
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileMenu) {
        const closeMenu = () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        const openMenu = () => {
            menuToggle.classList.add('active');
            mobileMenu.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };

        menuToggle.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;
            if (this.classList.contains('skip-link')) return;

            e.preventDefault();

            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({
                top: Math.max(offsetTop, 0),
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            if (window.history?.pushState) {
                window.history.pushState(null, '', href);
            }
        });
    });

    // ============================================
    // SCROLL REVEAL (Apple-style staggered)
    // ============================================
    function initAnimations() {
        if (prefersReducedMotion) return;

        const revealElements = document.querySelectorAll(
            '.section-number, .section-title, .section-desc, .section-visual, ' +
            '.tech-card, .social-tile, .social-btn, .subsection, ' +
            '.equipment-section, .tech-header, .tech-intro, .stack-section, ' +
            '.philosophy, .contact-content, .social-intro, .activities, .social-links'
        );

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const siblings = entry.target.parentElement.children;
                    const index = Array.from(siblings).indexOf(entry.target);
                    const delay = Math.min(index * 80, 400);
                    entry.target.style.transitionDelay = delay + 'ms';
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal-on-scroll');
            revealObserver.observe(el);
        });

        // Hero parallax
        initHeroParallax();
    }

    function initHeroParallax() {
        const heroTitle = document.querySelector('.hero-title');
        const heroContent = document.querySelector('.hero-content');
        if (!heroTitle || prefersReducedMotion) return;

        let heroTicking = false;
        window.addEventListener('scroll', () => {
            if (!heroTicking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const heroHeight = window.innerHeight;
                    if (scrollY < heroHeight) {
                        const progress = scrollY / heroHeight;
                        heroTitle.style.transform = 'translateY(' + (progress * 80) + 'px)';
                        if (heroContent) {
                            heroContent.style.opacity = Math.max(1 - (progress * 1.5), 0);
                        }
                    }
                    heroTicking = false;
                });
                heroTicking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // NAVIGATION SCROLL STATE
    // ============================================
    const nav = document.querySelector('.nav');

    let ticking = false;
    const handleNavScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (nav) {
                    nav.classList.toggle('scrolled', window.scrollY > 10);
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ============================================
    // BACK TO TOP
    // ============================================
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    }

    console.log('Portfolio loaded');
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioApp, { once: true });
} else {
    initPortfolioApp();
}
