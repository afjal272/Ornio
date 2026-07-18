/* ==========================================================
   ORNIO
   Scroll Reveal

   File    : scrollReveal.js
   Version : 3.0
========================================================== */

let revealObserver;

/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    createRevealObserver();

    initScrollReveal();

});


/* ==========================================================
   CREATE OBSERVER
========================================================== */

function createRevealObserver(){

    revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        });

    },{

        threshold:0.15,

        rootMargin:"0px 0px -80px 0px"

    });

}


/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initScrollReveal(){

    const elements = document.querySelectorAll(".reveal:not(.active)");

    if(!elements.length) return;

    elements.forEach(element=>{

        revealObserver.observe(element);

    });

}