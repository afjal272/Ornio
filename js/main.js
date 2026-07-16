/* ==========================================================
   ORNIO
   Main

   File    : main.js
   Version : 2.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initProducts();

    initFaq();

});


/* ==========================================================
   NAVBAR
========================================================== */

function initNavbar(){

    const menuBtn = document.querySelector(".menu-btn");

    const mobileMenu = document.querySelector(".navbar__menu");

    const navLinks = document.querySelectorAll(".nav-link");

    if(!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            menuBtn.classList.remove("active");

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

}