/* ==========================================================
   ORNIO
   Main

   File    : main.js
   Version : 2.2
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initSmoothScroll();

    initActiveNavigation();

    initProducts();

    initFaq();

    initContactForm();

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


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll(){

    const links = document.querySelectorAll('.nav-link[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",(event)=>{

            const targetId = link.getAttribute("href");

            if(!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if(!target) return;

            event.preventDefault();

            document.querySelectorAll(".nav-link").forEach(item=>{

                item.removeAttribute("aria-current");

            });

            link.setAttribute("aria-current","page");

            const headerHeight =
                document.querySelector(".header").offsetHeight;

            window.scrollTo({

                top:target.offsetTop - headerHeight,

                behavior:"smooth"

            });

        });

    });

}


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(".nav-link");

    if(!sections.length) return;

    window.addEventListener("scroll",()=>{

        const scrollPosition=
            window.scrollY +
            document.querySelector(".header").offsetHeight +
            120;

        sections.forEach(section=>{

            const top=section.offsetTop;

            const height=section.offsetHeight;

            const id=section.getAttribute("id");

            if(scrollPosition>=top && scrollPosition<top+height){

                navLinks.forEach(link=>{

                    link.removeAttribute("aria-current");

                    if(link.getAttribute("href")==="#" + id){

                        link.setAttribute("aria-current","page");

                    }

                });

            }

        });

    });

}