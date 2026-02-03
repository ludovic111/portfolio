# AI Context: Ludovic Portfolio

## Project Overview
This is a personal portfolio website for Ludovic, a DJ, Artist, and Chief AI Officer.
- **URL**: https://ludovicmarie.netlify.app/
- **Persona**: Tech-forward, creative, "Vibe Coding", Music, AI.

## Architecture
- **Type**: Static Website (HTML/CSS/JS)
- **Hosting**: Netlify
- **Key Files**:
    - `index.html`: Single-page layout with sections (About, DJ, Music, Tech, Streaming, Contact).
    - `css/styles.css`: Vanilla CSS with custom properties, animations, and responsive design. Uses `Instrument Sans` and `Instrument Serif` fonts.
    - `js/script.js`: Vanilla JS for interactions (Custom cursor, Scroll animations, Audio Player, WebGL-like background effects).

## Key Features
1.  **Custom Audio Player**: Located in `#musique` section. Uses HTML5 Audio API. Visualized with CSS.
2.  **Ambient Background**: Animated orbs (`.gradient-orb`) in `css/styles.css`.
3.  **Animations**:
    - Scroll reveal (`IntersectionObserver`).
    - Magnetic buttons (JS physics).
    - Glitch text effects.
    - Parallax mouse movement.
4.  **Internationalization**: Simple JSON-based i18n in `js/script.js` (FR/EN).

## Design System
- **Colors**:
    - Background: Dark (`#0a0a0a`)
    - Accent: Orange (`#ff6b35`)
    - Text: White (`#ffffff`)
- **Typography**:
    - Headers: Serif (Instrument Serif)
    - Body: Sans (Instrument Sans)

## Development Guidelines
- **CSS**: No frameworks (Tailwind, Bootstrap, etc.). Use pure CSS variables.
- **JS**: No heavy libraries (React, Vue, Three.js) unless necessary. Keep it lightweight and performance-focused.
- **Assets**: Images in `assets/images/`, Audio in `assets/audio/`.

## Common Tasks
- **Update Content**: Edit `translations` object in `js/script.js` for text changes.
- **Add Music**: Place file in `assets/audio/`, update `src` in `index.html`.
