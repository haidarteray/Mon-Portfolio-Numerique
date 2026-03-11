// magic.js - Fluidité et Optimisation FPS

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio chargé avec succès.');

    // --- 1. Intersection Observer pour les animations au défilement ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 2. Effet Parallaxe avec boucle d'animation continue ---
    const body = document.body;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 40;
        targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    });

    function animate() {
        // Interpolation pour un mouvement fluide
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        body.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
        body.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);

        requestAnimationFrame(animate);
    }

    // Lancer la boucle
    animate();
});
