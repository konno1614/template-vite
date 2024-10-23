document.addEventListener("DOMContentLoaded", function () {
    // smooth-scroll
    function setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // page-top
    function setupPageTopLinks() {
        const pageTopLinks = document.querySelectorAll('.js-page-top');
        pageTopLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // hamburger & sp-nav
    function setupHamburgerMenu() {
        const toggleNav = document.querySelector(".js-hamburger");
        const nav = document.querySelector(".c-sp-nav");
        const body = document.body;

        const toggleClasses = (action) => {
            [toggleNav, nav, body].forEach(el => el.classList[action]("is-open"));
        };

        toggleNav.addEventListener("click", () => toggleClasses("toggle"));
        document.querySelectorAll(".c-sp-nav ul li a").forEach(link =>
            link.addEventListener("click", () => toggleClasses("remove"))
        );
        window.addEventListener("resize", () => toggleClasses("remove"));
    }

    function init() {
        setupSmoothScroll();
        setupPageTopLinks();
        setupHamburgerMenu();
    }
    init();
});
