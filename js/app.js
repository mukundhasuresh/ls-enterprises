document.addEventListener('DOMContentLoaded', () => {
    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Fade up animations
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
        gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%", 
                toggleActions: "play none none reverse"
            }
        });
    });

    // Parallax Images
    gsap.utils.toArray('.parallax-bg').forEach(bg => {
        const speed = bg.getAttribute('data-speed') || 0.5;
        
        // Start position slightly transformed up so it moves down on scroll
        gsap.set(bg, { y: 0 });

        gsap.to(bg, {
            y: () => window.innerHeight * speed, // Move down based on speed
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom", 
                end: "bottom top", 
                scrub: true
            }
        });
    });

    // Marquee removed
});
