import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    gsap.to('.js-text', {
        xPercent: 50,
        duration: 5,
        repeat: -1,
        ease: 'none',
    });
});
