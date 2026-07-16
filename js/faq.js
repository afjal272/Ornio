/* ==========================================================
   ORNIO
   FAQ

   File    : faq.js
   Version : 2.1
========================================================== */

/* ==========================================================
   FAQ
========================================================== */

function initFaq() {

    const faqItems = document.querySelectorAll(".faq__item");

    if (!faqItems.length) return;

    faqItems.forEach((item) => {

        const button = item.querySelector(".faq__question");

        if (!button) return;

        button.addEventListener("click", (event) => {

            event.preventDefault();

            faqItems.forEach((faq) => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}