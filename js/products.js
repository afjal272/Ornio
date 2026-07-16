/* ==========================================================
   ORNIO
   Products

   File    : products.js
   Version : 2.1
========================================================== */

/* ==========================================================
   PRODUCTS
========================================================== */

function renderFeaturedProducts() {

    const featuredProductsContainer = document.getElementById("featured-products");

    if (!featuredProductsContainer) return;

    featuredProductsContainer.innerHTML = featuredProducts.map((product) => `

        <article class="products__card">

            <div class="products__image">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="products__image-element">

            </div>

            <div class="products__content">

                <span class="products__category">

                    ${product.category}

                </span>

                <h3 class="products__name">

                    ${product.title}

                </h3>

                <p class="products__text">

                    ${product.description}

                </p>

                <a
                    href="#contact"
                    class="products__link">

                    View Details

                </a>

            </div>

        </article>

    `).join("");

}


/* ==========================================================
   INITIALIZE
========================================================== */

function initProducts() {

    renderFeaturedProducts();

}