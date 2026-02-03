/**
 * LUDOVIC — Stunning Portfolio Interactions
 * DJ · Artiste · Chief AI Officer
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
        heroBio: "Étudiant au Collège Émilie-Gourd (maturité juin 2026), basé à Genève. Je navigue entre la musique, la tech et le streaming — passionné par l'intersection entre créativité et innovation.",
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
        musicTitle: "Musique",
        musicDesc: "Je fais du rap sous le nom <strong>Ludovic</strong>. Artiste rap basé en Suisse, je développe un style personnel mêlant influences américaines et européennes. Mes textes abordent des thèmes personnels avec une production moderne.",
        musicDiscoTitle: "Discographie",
        musicReleaseType: "Premier single",
        musicListen: "Écouter",

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
        contactType2: "Collaborations musicales",
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
        formSend: "Envoyer",

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
        heroBio: "Student at Collège Émilie-Gourd (graduating June 2026), based in Geneva. I navigate between music, tech and streaming — passionate about the intersection of creativity and innovation.",
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
        musicTitle: "Music",
        musicDesc: "I make rap under the name <strong>Ludovic</strong>. A Swiss-based rap artist, I'm developing a personal style blending American and European influences. My lyrics address personal themes with modern production.",
        musicDiscoTitle: "Discography",
        musicReleaseType: "First single",
        musicListen: "Listen",

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
        contactType2: "Music collaborations",
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
        formSend: "Send",

        // Footer
        footerText: "© 2026 Ludovic — DJ · Artist · Chief AI Officer"
    }
};

// Current language state
let currentLang = localStorage.getItem('portfolioLang') ||
    (navigator.language.startsWith('fr') ? 'fr' : 'en');

// Function to update all text content
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
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

    // Update toggle buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialize language on page load
function initLanguage() {
    setLanguage(currentLang);

    // Language toggle click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ============================================
// PERFORMANCE UTILITIES
// ============================================
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system
    initLanguage();
    // ============================================
    // LOADING SCREEN
    // ============================================
    const loadingScreen = document.querySelector('.loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            initAnimations();
        }, 2000);
    });

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enableMotionEffects = !isTouchDevice && !prefersReducedMotion;
    
    if (enableMotionEffects && cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.12;
            cursorY += (mouseY - cursorY) * 0.12;
            followerX += (mouseX - followerX) * 0.06;
            followerY += (mouseY - followerY) * 0.06;
            
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .magnetic, .visual-card, .tech-card, .social-tile, .genre-tag');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ============================================
    // MAGNETIC EFFECT WITH SPRING PHYSICS
    // ============================================
    const magneticElements = document.querySelectorAll('.magnetic');

    if (enableMotionEffects) {
        magneticElements.forEach(el => {
            let currentX = 0;
            let currentY = 0;
            let targetX = 0;
            let targetY = 0;
            let isHovering = false;
            let animationFrame = null;

            // Spring physics constants
            const stiffness = 0.12;
            const damping = 0.82;
            let velocityX = 0;
            let velocityY = 0;

            const animateMagnetic = () => {
                if (!isHovering) {
                    // Spring back to center with elastic effect
                    const forceX = -currentX * stiffness;
                    const forceY = -currentY * stiffness;
                    velocityX = (velocityX + forceX) * damping;
                    velocityY = (velocityY + forceY) * damping;
                    currentX += velocityX;
                    currentY += velocityY;

                    // Stop animation when close enough to center
                    if (Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1 &&
                        Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
                        currentX = 0;
                        currentY = 0;
                        el.style.transform = 'translate(0, 0)';
                        return;
                    }
                } else {
                    // Smooth follow with lerp
                    currentX += (targetX - currentX) * 0.14;
                    currentY += (targetY - currentY) * 0.14;
                }

                el.style.transform = `translate(${currentX}px, ${currentY}px)`;
                animationFrame = requestAnimationFrame(animateMagnetic);
            };

            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                targetX = (e.clientX - rect.left - rect.width / 2) * 0.3;
                targetY = (e.clientY - rect.top - rect.height / 2) * 0.3;

                if (!isHovering) {
                    isHovering = true;
                    velocityX = 0;
                    velocityY = 0;
                    if (animationFrame) cancelAnimationFrame(animationFrame);
                    animateMagnetic();
                }
            });

            el.addEventListener('mouseleave', () => {
                isHovering = false;
                // Animation continues with spring physics to return to center
            });
        });
    }

    // ============================================
    // MOBILE MENU
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS (Enhanced with blur)
    // ============================================
    function initAnimations() {
        const revealElements = document.querySelectorAll('.section-title, .section-desc, .section-visual, .tech-card, .social-tile, .platform-btn, .social-btn, .subsection, .equipment-section, .discography');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) rotate(0deg)';
                    }, index * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px) rotate(-1deg)';
            el.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
            revealObserver.observe(el);
        });
    }

    // ============================================
    // PARALLAX EFFECTS
    // ============================================
    const orbs = document.querySelectorAll('.gradient-orb');
    const floatingBadges = document.querySelectorAll('.floating-badge');
    let orbParallaxX = 0;
    let orbParallaxY = 0;
    let targetOrbParallaxX = 0;
    let targetOrbParallaxY = 0;
    let parallaxTicking = false;

    const updateParallax = () => {
        const scrollY = window.scrollY;
        orbParallaxX += (targetOrbParallaxX - orbParallaxX) * 0.08;
        orbParallaxY += (targetOrbParallaxY - orbParallaxY) * 0.08;

        orbs.forEach((orb, index) => {
            const scrollSpeed = 0.1 + (index * 0.05);
            const depth = 20 + (index * 15);
            const x = orbParallaxX * depth;
            const y = (scrollY * scrollSpeed) + (orbParallaxY * depth);
            orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });

        floatingBadges.forEach((badge, index) => {
            const depth = 10 + (index * 5);
            badge.style.transform = `translate3d(${orbParallaxX * depth}px, ${orbParallaxY * depth}px, 0)`;
        });

        if (
            Math.abs(targetOrbParallaxX - orbParallaxX) > 0.001 ||
            Math.abs(targetOrbParallaxY - orbParallaxY) > 0.001
        ) {
            requestAnimationFrame(updateParallax);
            return;
        }

        parallaxTicking = false;
    };

    const scheduleParallaxUpdate = () => {
        if (prefersReducedMotion || parallaxTicking) return;
        parallaxTicking = true;
        requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', scheduleParallaxUpdate, { passive: true });
    scheduleParallaxUpdate();

    // ============================================
    // MOUSE-BASED PARALLAX (Hero Section)
    // ============================================
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (hero && enableMotionEffects) {

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            targetOrbParallaxX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            targetOrbParallaxY = (e.clientY - rect.top - rect.height / 2) / rect.height;
            hero.style.setProperty('--hero-mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
            hero.style.setProperty('--hero-mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
            scheduleParallaxUpdate();
        });

        hero.addEventListener('mouseleave', () => {
            hero.style.setProperty('--hero-mouse-x', '65%');
            hero.style.setProperty('--hero-mouse-y', '35%');
        });
    }

    // ============================================
    // NAVBAR VISIBILITY (throttled for performance)
    // ============================================
    const nav = document.querySelector('.nav');

    const handleNavScroll = throttle(() => {
        const currentScroll = window.scrollY;

        if (nav) {
            nav.classList.toggle('scrolled', currentScroll > 24);
        }

        if (heroContent && heroVisual && !prefersReducedMotion) {
            const cinematicProgress = Math.min(currentScroll / (window.innerHeight * 0.9), 1);
            heroContent.style.transform = `translate3d(0, ${-28 * cinematicProgress}px, 0)`;
            heroVisual.style.transform = `translate3d(0, ${18 * cinematicProgress}px, 0) scale(${1 - (cinematicProgress * 0.03)})`;
            heroContent.style.opacity = `${1 - (cinematicProgress * 0.25)}`;
        }
    }, 16);

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ============================================
    // HEADSHOT TILT EFFECT
    // ============================================
    const headshotFrame = document.querySelector('.headshot-frame');
    
    if (headshotFrame && enableMotionEffects) {
        headshotFrame.addEventListener('mousemove', (e) => {
            const rect = headshotFrame.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            headshotFrame.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        });
        
        headshotFrame.addEventListener('mouseleave', () => {
            headshotFrame.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });
    }

    // ============================================
    // GLITCH TEXT EFFECT
    // ============================================
    const glitchElements = document.querySelectorAll('.section-title .title-text');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const originalText = el.textContent;
            let iterations = 0;
            
            const interval = setInterval(() => {
                el.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    el.textContent = originalText;
                }
            }, 30);
        });
    });

    // ============================================
    // BACK TO TOP
    // ============================================
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // SOUND WAVE AMPLIFICATION ON SCROLL (throttled)
    // ============================================
    const soundWaves = document.querySelectorAll('.equalizer span');
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    const handleSoundWaveScroll = throttle(() => {
        scrollSpeed = Math.abs(window.scrollY - lastScrollY);
        lastScrollY = window.scrollY;

        const speed = Math.max(0.35, Math.min(scrollSpeed / 10, 2));

        soundWaves.forEach((wave, index) => {
            wave.style.animationDuration = `${0.5 / speed}s`;
            wave.style.animationDelay = `${index * 0.05}s`;
        });
    }, 60);

    window.addEventListener('scroll', handleSoundWaveScroll, { passive: true });

    // ============================================
    // MARQUEE SPEED BASED ON SCROLL (throttled)
    // ============================================
    const marqueeTrack = document.querySelector('.marquee-track');

    if (marqueeTrack) {
        const handleMarqueeScroll = throttle(() => {
            const speed = 1 + Math.min(scrollSpeed / 50, 3);
            marqueeTrack.style.animationDuration = `${20 / speed}s`;
        }, 60);

        window.addEventListener('scroll', handleMarqueeScroll, { passive: true });
    }

    // ============================================
    // CARD 3D TILT EFFECT
    // ============================================
    const cards = document.querySelectorAll('.tech-card, .visual-card, .social-tile');
    
    if (enableMotionEffects) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
            });
        });
    }

    // ============================================
    // SOCIAL TILE INTERACTION
    // ============================================
    const socialTiles = document.querySelectorAll('.social-tile');
    
    if (enableMotionEffects) {
        socialTiles.forEach(tile => {
            tile.addEventListener('mousemove', (e) => {
                const rect = tile.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const bg = tile.querySelector('.tile-bg');
                if (bg) {
                    bg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(10, 132, 255, 0.15), transparent 50%)`;
                }
            });
        });
    }

    // ============================================
    // TEXT SCRAMBLE ON ROLE HOVER
    // ============================================
    const roles = document.querySelectorAll('.role');
    
    roles.forEach(role => {
        const originalText = role.textContent;
        
        role.addEventListener('mouseenter', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                role.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                iterations += 1/2;
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    role.textContent = originalText;
                }
            }, 50);
        });
    });

    // ============================================
    // SMOOTH SECTION TRANSITIONS
    // ============================================
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0.9';
        section.style.transition = 'opacity 0.5s ease';
        sectionObserver.observe(section);
    });

    // ============================================
    // HEADSHOT IMAGE REVEAL
    // ============================================
    const headshotImg = document.querySelector('.headshot-img');
    if (headshotImg) {
        headshotImg.style.opacity = '0';
        headshotImg.style.transform = 'scale(1.1)';
        headshotImg.style.transition = 'all 1s var(--ease-out-expo)';
        
        setTimeout(() => {
            headshotImg.style.opacity = '1';
            headshotImg.style.transform = 'scale(1)';
        }, 1000);
    }

    // ============================================
    // DJ IMAGE PARALLAX
    // ============================================
    const djImage = document.querySelector('.dj-image');
    const djCard = document.querySelector('.dj-card');
    
    if (djCard && djImage && enableMotionEffects) {
        djCard.addEventListener('mousemove', (e) => {
            const rect = djCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            djImage.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
        });
        
        djCard.addEventListener('mouseleave', () => {
            djImage.style.transform = 'scale(1)';
        });
    }

    // ============================================
    // CUSTOM AUDIO PLAYER
    // ============================================
    const audioPlayer = document.getElementById('audio-player');
    const mainPlayBtn = document.getElementById('main-play-btn');
    const overlayPlayBtn = document.querySelector('.play-overlay-btn');
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const muteBtn = document.getElementById('mute-btn');
    
    // Only init if player exists
    if (audioPlayer && mainPlayBtn && progressContainer) {
        let isPlaying = false;
        
        // Toggle Play/Pause
        function togglePlay() {
            if (isPlaying) {
                audioPlayer.pause();
            } else {
                audioPlayer.play();
            }
        }
        
        function updatePlayIcons(playing) {
            isPlaying = playing;
            const icons = [mainPlayBtn, overlayPlayBtn];
            
            icons.forEach(btn => {
                const playIcon = btn.querySelector('.play-icon');
                const pauseIcon = btn.querySelector('.pause-icon');
                if (playIcon && pauseIcon) {
                    if (playing) {
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.remove('hidden');
                    } else {
                        playIcon.classList.remove('hidden');
                        pauseIcon.classList.add('hidden');
                    }
                }
            });

            // Also animate the vinyl cover if playing
            const vinylCover = document.querySelector('.release-cover');
            if (vinylCover) {
                if (playing) {
                    vinylCover.style.animation = 'spin 8s linear infinite';
                } else {
                    vinylCover.style.animation = 'none';
                    // Optional: could pause animation at current rotation, but none is simpler
                }
            }
        }
        
        mainPlayBtn.addEventListener('click', togglePlay);
        if (overlayPlayBtn) overlayPlayBtn.addEventListener('click', togglePlay);
        
        audioPlayer.addEventListener('play', () => updatePlayIcons(true));
        audioPlayer.addEventListener('pause', () => updatePlayIcons(false));
        
        // Time Update
        audioPlayer.addEventListener('timeupdate', (e) => {
            const { duration, currentTime } = e.srcElement;
            const progressPercent = (currentTime / duration) * 100;
            progressFill.style.width = `${progressPercent}%`;
            
            // Format Time
             const formatTime = (time) => {
                if (isNaN(time)) return "0:00";
                const minutes = Math.floor(time / 60);
                const seconds = Math.floor(time % 60);
                return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            };
            
            currentTimeEl.textContent = formatTime(currentTime);
            // Avoid NaN duration
            if (duration) {
                durationEl.textContent = formatTime(duration);
            }
        });
        
        // Click on progress bar
        progressContainer.addEventListener('click', (e) => {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = audioPlayer.duration;
            
            audioPlayer.currentTime = (clickX / width) * duration;
        });
        
        // Mute
        muteBtn.addEventListener('click', () => {
            audioPlayer.muted = !audioPlayer.muted;
            const iconPath = muteBtn.querySelector('path');
            // Simple visual toggle for mute (or could swap icons)
            if (audioPlayer.muted) {
                muteBtn.style.opacity = '0.5';
                iconPath.setAttribute('d', 'M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6'); // Strike through or x
            } else {
                muteBtn.style.opacity = '1';
                iconPath.setAttribute('d', 'M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07'); // Normal volume
            }
        });

        // Song End
        audioPlayer.addEventListener('ended', () => {
            updatePlayIcons(false);
            audioPlayer.currentTime = 0;
            progressFill.style.width = '0%';
        });
    }

    console.log('🎵 Ludovic portfolio loaded with stunning animations!');
});
