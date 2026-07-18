/* ==========================================================
   ORNIO
   Contact Form

   File    : contact.js
   Version : 1.0
========================================================== */


console.log("contact.js loaded");

function initContactForm() {

    const form = document.getElementById("contact-form");

    if (!form) return;

    const submitButton = document.getElementById("contact-submit");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const company = document.getElementById("company").value.trim();

        const person = document.getElementById("person").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const product = document.getElementById("product").value;

        const quantity = document.getElementById("quantity").value;

        const message = document.getElementById("message").value.trim();


        /* ==========================
           Validation
        ========================== */

        if (
            !company ||
            !person ||
            !email ||
            !phone ||
            !product ||
            !quantity ||
            !message
        ) {

            alert("Please fill all required fields.");

            return;

        }

        const emailPattern =

            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        const phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }


        /* ==========================
           Loading State
        ========================== */

        submitButton.disabled = true;

        submitButton.textContent = "Opening WhatsApp...";


        /* ==========================
           WhatsApp Message
        ========================== */

        const whatsappMessage =

`Hello ORNIO,

I would like to inquire about your corporate gifting services.

━━━━━━━━━━━━━━━━━━

🏢 Company
${company}

👤 Contact Person
${person}

📧 Email
${email}

📞 Phone
${phone}

🎁 Product
${product}

📦 Estimated Quantity
${quantity}

📝 Requirement
${message}

━━━━━━━━━━━━━━━━━━

Please share your quotation and available options.

Thank you.`;



        const url =

`https://wa.me/918448904039?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(url, "_blank");


        submitButton.disabled = false;

        submitButton.textContent = "Send Inquiry";

        form.reset();

    });

}



function initFloatingWhatsapp() {

    const button = document.getElementById("whatsapp-float");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    }, { passive: true });

}