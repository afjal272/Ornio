/* ==========================================================
   ORNIO
   Navbar

   File    : navbar.js
   Version : 2.1
========================================================== */

/* ==========================================================
   NAVBAR
========================================================== */

function initNavbar() {

    const header = document.querySelector(".header");
    const menuButton = document.querySelector(".menu-btn");
    const navigationMenu = document.querySelector(".navbar__menu");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    if (!header || !menuButton || !navigationMenu) return;

    /* ==========================================================
       MENU
    ========================================================== */

    function openMenu() {

        navigationMenu.classList.add("active");
        menuButton.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");

        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        navigationMenu.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";

    }

    function toggleMenu() {

        if (navigationMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    }

    menuButton.addEventListener("click", toggleMenu);

    navigationLinks.forEach((link) => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

    document.addEventListener("click", (event) => {

        const clickedInsideNavbar = event.target.closest(".navbar");

        if (!clickedInsideNavbar) {

            closeMenu();

        }

    });

    /* ==========================================================
       SCROLL
    ========================================================== */

    function handleScroll() {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navigationLinks.forEach((link) => {

            link.removeAttribute("aria-current");

            if (link.getAttribute("href") === `#${currentSection}`) {

                link.setAttribute("aria-current", "page");

            }

        });

    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

}