/* ==========================================================
   ORNIO
   Main

   File    : main.js
   Version : 2.3
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initSmoothScroll();

    initProducts();

    initFaq();

    initContactForm();

    initFloatingWhatsapp();

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('.nav-link[href^="#"]');

    if (!links.length) return;

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const header = document.querySelector(".header");

            const headerHeight = header ? header.offsetHeight : 0;

            window.scrollTo({

                top: target.offsetTop - headerHeight,

                behavior: "smooth"

            });

        });

    });

}