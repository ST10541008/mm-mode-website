/*
   MM MODE - MAIN JAVASCRIPT
   Shopping Cart, Search, Pagination and Receipt
   ===============================================*/

const CART_KEY = "mmModeCart";
const ORDER_KEY = "mmModeOrder";

/*
   1. GENERAL FUNCTIONS
   ===================== */

// Get the cart from localStorage
function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
        return [];
    }
}

// Save the cart
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Format prices in South African Rand
function formatPrice(amount) {
    return "R" + Number(amount).toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate the total price
function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Safely display text inside HTML
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => {
        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return characters[character];
    });
}

// Update the cart number in the navigation
function updateCartCount() {
    const cart = getCart();

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

/*
   2. ADD PRODUCTS TO CART
   ======================= */

function addToCart(button) {
    const productCard = button.closest(".product-card");

    if (!productCard) return;

    const product = {
        id: productCard.dataset.id,
        name: productCard.dataset.name,
        price: Number(productCard.dataset.price),
        image: productCard.querySelector("img")?.getAttribute("src") || "",
        quantity: 1
    };

    if (!product.id || !product.name || !Number.isFinite(product.price)) {
        alert("This product could not be added. Please check its product details.");
        return;
    }

    const cart = getCart();

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    saveCart(cart);
    updateCartCount();

    // Automatically open the cart page
    window.location.href = "cart.html";
}

// Listen for ADD TO CART clicks
document.addEventListener("click", function (event) {
    const button = event.target.closest(".add-to-cart");

    if (button) {
        addToCart(button);
    }
});

/*
   3. DISPLAY SHOPPING CART
   ======================== */

function displayCart() {
    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    const cart = getCart();

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalPrice = calculateTotal(cart);

    const totalItemsElement = document.getElementById("cart-total-items");
    const totalPriceElement = document.getElementById("cart-total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    if (totalItemsElement) {
        totalItemsElement.textContent = totalItems;
    }

    if (totalPriceElement) {
        totalPriceElement.textContent = formatPrice(totalPrice);
    }

    if (checkoutButton) {
        checkoutButton.disabled = cart.length === 0;
    }

    // Show a message when the cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p>Your shopping cart is currently empty.</p>
        `;
        return;
    }

    // Display each selected product
    cartItems.innerHTML = cart.map(item => `
        <article class="cart-item">

            <img
                src="${escapeHTML(item.image)}"
                alt="${escapeHTML(item.name)}"
            >

            <div class="cart-item-details">

                <h3>${escapeHTML(item.name)}</h3>

                <p>Price: ${formatPrice(item.price)}</p>

                <p>
                    Subtotal:
                    <strong>${formatPrice(item.price * item.quantity)}</strong>
                </p>

            </div>

            <div class="cart-item-actions">

                <div class="quantity-control">

                    <button
                        type="button"
                        class="quantity-minus"
                        data-id="${escapeHTML(item.id)}"
                        aria-label="Decrease quantity"
                    >−</button>

                    <span>${item.quantity}</span>

                    <button
                        type="button"
                        class="quantity-plus"
                        data-id="${escapeHTML(item.id)}"
                        aria-label="Increase quantity"
                    >+</button>

                </div>

                <button
                    type="button"
                    class="remove-item"
                    data-id="${escapeHTML(item.id)}"
                >
                    Remove
                </button>

            </div>

        </article>
    `).join("");
}

/*
   4. CHANGE QUANTITY OR REMOVE PRODUCTS
   ===================================== */

document.addEventListener("click", function (event) {

    const plusButton = event.target.closest(".quantity-plus");
    const minusButton = event.target.closest(".quantity-minus");
    const removeButton = event.target.closest(".remove-item");

    if (!plusButton && !minusButton && !removeButton) {
        return;
    }

    const button = plusButton || minusButton || removeButton;
    const productId = button.dataset.id;

    const cart = getCart();

    const product = cart.find(item => item.id === productId);

    if (!product) return;

    if (plusButton) {
        product.quantity += 1;
    }

    if (minusButton) {
        product.quantity -= 1;

        if (product.quantity <= 0) {
            const index = cart.findIndex(item => item.id === productId);
            cart.splice(index, 1);
        }
    }

    if (removeButton) {
        const index = cart.findIndex(item => item.id === productId);
        cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCount();
    displayCart();
});

/*
   5. PROCEED TO CHECKOUT
   ====================== */

function setupCheckout() {
    const checkoutButton = document.getElementById("checkout-btn");

    if (!checkoutButton) return;

    checkoutButton.addEventListener("click", function () {

        const cart = getCart();

        if (cart.length === 0) {
            alert("Your shopping cart is empty.");
            return;
        }

        window.location.href = "enquiry.html";
    });
}

/*
   6. DISPLAY ORDER SUMMARY ON ENQUIRY PAGE
   =========================================*/

function displayCheckoutSummary() {
    const enquiryForm = document.querySelector(".enquiry-form");

    if (!enquiryForm) return;

    let summarySection = document.getElementById("checkout-summary-section");

    if (!summarySection) {
        summarySection = document.createElement("div");

        summarySection.id = "checkout-summary-section";
        summarySection.className = "form-group full-width";

        const buttonWrapper = enquiryForm.querySelector(".button-wrapper");

        if (buttonWrapper) {
            enquiryForm.insertBefore(summarySection, buttonWrapper);
        } else {
            enquiryForm.appendChild(summarySection);
        }
    }

    const cart = getCart();

    if (cart.length === 0) {
        summarySection.innerHTML = `
            <h2>Your Order Summary</h2>
            <p>No products have been added to your cart.</p>
            <a href="product.html" class="button">SHOP PRODUCTS</a>
        `;
        return;
    }

    summarySection.innerHTML = `
        <h2>Your Order Summary</h2>

        ${cart.map(item => `
            <p>
                ${escapeHTML(item.name)}
                × ${item.quantity}
                — ${formatPrice(item.price * item.quantity)}
            </p>
        `).join("")}

        <p>
            <strong>Total: ${formatPrice(calculateTotal(cart))}</strong>
        </p>

        <a href="cart.html">Return to cart to make changes</a>
    `;
}

/*
   7. SUBMIT ENQUIRY AND SAVE ORDER
   ================================ */

function setupEnquiryForm() {
    const enquiryForm = document.querySelector(".enquiry-form");

    if (!enquiryForm) return;

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.reportValidity()) {
            return;
        }

        const cart = getCart();

        const customer = {
            name: document.getElementById("fullname")?.value.trim() || "",
            email: document.getElementById("email")?.value.trim() || "",
            phone: document.getElementById("phone")?.value.trim() || "",
            address: document.getElementById("address")?.value.trim() || "",
            interest: document.getElementById("interest")?.value || "",
            enquiry: document.getElementById("enquiry")?.value.trim() || ""
        };

        const order = {
            orderNumber: "MM-" + Date.now(),
            date: new Date().toLocaleString("en-ZA"),
            customer: customer,
            products: cart,
            total: calculateTotal(cart)
        };

        localStorage.setItem(ORDER_KEY, JSON.stringify(order));

        window.location.href = "receipt.html";
    });
}

/*
   8. DISPLAY RECEIPT
   ================== */

function displayReceipt() {
    const receiptItems = document.getElementById("receipt-items");

    if (!receiptItems) return;

    const savedOrder = localStorage.getItem(ORDER_KEY);

    if (!savedOrder) {
        receiptItems.innerHTML = `
            <p>No order information is available.</p>
            <a href="product.html" class="button">SHOP NOW</a>
        `;
        return;
    }

    let order;

    try {
        order = JSON.parse(savedOrder);
    } catch (error) {
        receiptItems.innerHTML = "<p>Order information could not be displayed.</p>";
        return;
    }

    const customer = order.customer || {};

    const orderNumber = document.getElementById("receipt-order-number");
    const orderDate = document.getElementById("receipt-date");

    if (orderNumber) {
        orderNumber.textContent = order.orderNumber || "-";
    }

    if (orderDate) {
        orderDate.textContent = order.date || "-";
    }

    const customerFields = {
        "receipt-name": customer.name,
        "receipt-email": customer.email,
        "receipt-phone": customer.phone,
        "receipt-address": customer.address,
        "receipt-enquiry": customer.enquiry
    };

    Object.entries(customerFields).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value || "-";
        }
    });

    const products = Array.isArray(order.products) ? order.products : [];

    if (products.length === 0) {
        receiptItems.innerHTML = "<p>No products were included in this order.</p>";
    } else {
        receiptItems.innerHTML = products.map(item => `
            <div class="receipt-item">

                <div>
                    <h3>${escapeHTML(item.name)}</h3>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ${formatPrice(item.price)}</p>
                </div>

                <strong>
                    ${formatPrice(item.price * item.quantity)}
                </strong>

            </div>
        `).join("");
    }

    const receiptTotal = document.getElementById("receipt-total");

    if (receiptTotal) {
        receiptTotal.textContent = formatPrice(order.total || 0);
    }

    // Clear the shopping cart after displaying the saved order
    localStorage.removeItem(CART_KEY);
    updateCartCount();
}

/*
   9. PRINT RECEIPT
   ================= */

function setupPrintReceipt() {
    const printButton = document.getElementById("print-receipt");

    if (!printButton) return;

    printButton.addEventListener("click", function () {
        window.print();
    });
}

/*
   10. SEARCH PRODUCTS
   ==================== */

// Keep track of the current product page
let currentPage = 1;

// Show four products per page
const productsPerPage = 4;

// Store the current search word
let activeSearchTerm = "";

// Filter products according to the search word
function filterProducts(searchTerm) {
    activeSearchTerm = searchTerm.trim().toLowerCase();

    currentPage = 1;

    updateProductPage();
}

// Set up the search bar
function setupSearch() {
    const searchForms = document.querySelectorAll(".search-bar");

    searchForms.forEach(form => {

        const searchInput = form.querySelector('input[type="search"]');

        if (!searchInput) return;

        // Search when the customer clicks the button or presses Enter
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.trim();

            // If already on the product page, filter products
            if (document.querySelector(".products-grid")) {
                filterProducts(searchTerm);
            } else {
                // If on another page, open the product page with the search
                window.location.href =
                    "product.html?search=" + encodeURIComponent(searchTerm);
            }
        });

        // Search while typing on the product page
        if (document.querySelector(".products-grid")) {
            searchInput.addEventListener("input", function () {
                filterProducts(searchInput.value);
            });
        }
    });

    // Read a search submitted from another page
    const parameters = new URLSearchParams(window.location.search);
    const searchTerm = parameters.get("search");

    if (searchTerm !== null && document.querySelector(".products-grid")) {

        const searchInput = document.querySelector(
            '.search-bar input[type="search"]'
        );

        if (searchInput) {
            searchInput.value = searchTerm;
        }

        filterProducts(searchTerm);
    }
}


/* =====================================================
   11. SORT PRODUCTS
   ===================================================== */

function setupProductSorting() {

    const sortSelect = document.getElementById("sort-products");
    const productGrid = document.querySelector(".products-grid");

    if (!sortSelect || !productGrid) return;

    // Store the original order of the products
    const originalOrder = Array.from(
        productGrid.querySelectorAll(".product-card")
    );

    sortSelect.addEventListener("change", function () {

        const productCards = Array.from(
            productGrid.querySelectorAll(".product-card")
        );

        // Sort products according to the selected option
        productCards.sort((a, b) => {

            const priceA = Number(a.dataset.price);
            const priceB = Number(b.dataset.price);

            const nameA = a.dataset.name || "";
            const nameB = b.dataset.name || "";

            switch (sortSelect.value) {

                case "low":
                    return priceA - priceB;

                case "high":
                    return priceB - priceA;

                case "az":
                    return nameA.localeCompare(nameB);

                default:
                    return originalOrder.indexOf(a) -
                           originalOrder.indexOf(b);
            }
        });

        // Place the products in their new order
        productCards.forEach(card => {
            productGrid.appendChild(card);
        });

        // Return to the first page
        currentPage = 1;

        // Refresh the product display
        updateProductPage();
    });
}


/* 12. PRODUCT PAGINATION
=============================== */


function updateProductPage() {

    const productCards = Array.from(
        document.querySelectorAll(".products-grid .product-card")
    );

    const pagination = document.getElementById("pagination-controls");

    let message = document.getElementById("search-message");

    if (productCards.length === 0) return;

    // Create the search message if it does not exist
    if (!message) {
        message = document.createElement("p");
        message.id = "search-message";
        message.setAttribute("role", "status");

        const grid = document.querySelector(".products-grid");

        if (grid) {
            grid.before(message);
        }
    }

    // Find products matching the search word
    const matchingCards = productCards.filter(card => {

        const productName = (
            card.dataset.name ||
            card.querySelector("h3")?.textContent ||
            ""
        ).toLowerCase();

        return productName.includes(activeSearchTerm);
    });

    // Display matching search results
    if (activeSearchTerm !== "") {

        productCards.forEach(card => {
            card.style.display =
                matchingCards.includes(card) ? "" : "none";
        });

        if (pagination) {
            pagination.style.display = "none";
        }

        message.textContent = matchingCards.length === 0
            ? "No products found. Try another search."
            : matchingCards.length + " product(s) found.";

        return;
    }

    // Clear search message
    message.textContent = "";

    // Calculate total pages
    const totalPages = Math.ceil(
        productCards.length / productsPerPage
    );

    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Display products for the selected page
    productCards.forEach((card, index) => {
        card.style.display =
            index >= startIndex && index < endIndex ? "" : "none";
    });

    // Generate pagination buttons
    if (pagination) {

        pagination.style.display = totalPages > 1 ? "flex" : "none";

        let buttonsHTML = `
            <button type="button"
                class="page-link"
                data-action="previous"
                ${currentPage === 1 ? "disabled" : ""}>
                &laquo;
            </button>
        `;

        for (let page = 1; page <= totalPages; page++) {

            buttonsHTML += `
                <button type="button"
                    class="page-link ${page === currentPage ? "activity" : ""}"
                    data-page="${page}">
                    ${page}
                </button>
            `;
        }

        buttonsHTML += `
            <button type="button"
                class="page-link"
                data-action="next"
                ${currentPage === totalPages ? "disabled" : ""}>
                &raquo;
            </button>
        `;

        pagination.innerHTML = buttonsHTML;
    }
}

// Set up pagination buttons
function setupPagination() {

    const pagination = document.getElementById("pagination-controls");

    if (!pagination) return;

    pagination.addEventListener("click", function (event) {

        const button = event.target.closest(".page-link");

        if (!button || button.disabled) return;

        if (button.dataset.action === "previous") {
            currentPage--;
        }
        else if (button.dataset.action === "next") {
            currentPage++;
        }
        else if (button.dataset.page) {
            currentPage = Number(button.dataset.page);
        }

        updateProductPage();
    });

    updateProductPage();
}


/*
   13. START ALL JAVASCRIPT FEATURES
   ================================== */

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    displayCart();
    setupCheckout();

    displayCheckoutSummary();
    setupEnquiryForm();

    displayReceipt();
    setupPrintReceipt();

     setupSearch();
    setupProductSorting();
    setupPagination();

    setupLocationMap();

});
/*
   FAQ ACCORDION
   ===============*/

const faqAccordionButtons = document.querySelectorAll(".faq-question");

faqAccordionButtons.forEach((question) => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (!answer) return;

        const isExpanded = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", String(!isExpanded));

        answer.hidden = isExpanded;
    });
});

/*
   MM MODE INTERACTIVE LOCATION MAP
   ================================= */

function setupLocationMap() {

    const mapElement = document.getElementById("mm-mode-map");

    // Stop if the map container does not exist
    if (!mapElement || typeof L === "undefined") return;

    // Create the map
    const map = L.map("mm-mode-map");

    // Add OpenStreetMap tiles
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(map);
    // MM MODE locations
    const locations = [
        {
            name: "MM MODE - Sandton City",
            address: "Shop 123, Sandton City, Johannesburg",
            coordinates: [-26.1081, 28.0541]
        },
        {
            name: "MM MODE - Mall of Africa",
            address: "Shop 45, Mall of Africa, Midrand",
            coordinates: [-26.015112, 28.107004]
        }
    ];

    // Add a marker for each location
    locations.forEach(function(location) {

        L.marker(location.coordinates)
            .addTo(map)
            .bindPopup(
                `<strong>${location.name}</strong><br>${location.address}`
            );

    });

    // Automatically show both locations
    const bounds = L.latLngBounds(
        locations.map(location => location.coordinates)
    );

    map.fitBounds(bounds, {
    padding: [30, 30],
    maxZoom: 13
});
}
