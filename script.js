// review products section
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      title: "Fantastic Highlighter",
      review:
        "The Be Bold Glow Highlighter is amazing! It gives a perfect glow that lasts all day.",
      reviewer: "Jane Doe",
    },
    {
      title: "Best Blush Ever",
      review:
        "I love the Be Bold Blush. The shades are perfect for any skin tone and blend seamlessly.",
      reviewer: "John Smith",
    },
    {
      title: "Amazing Lipstick",
      review:
        "The Be Bold Lipstick collection has the most vibrant colors. It’s long-lasting and doesn’t smudge.",
      reviewer: "Emily Davis",
    },
  ];

  const reviewsContainer = document.getElementById("reviews");

  reviews.forEach((review, index) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("col-md-4", "mb-3");
    reviewCard.innerHTML = `
            <div class="card" onclick="toggleCardColor(this)">
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.review}</p>
                    <p class="card-text"><small class="text-muted">- ${review.reviewer}</small></p>
                </div>
            </div>
        `;
    reviewsContainer.appendChild(reviewCard);
  });

  // Function to toggle background color of the clicked card
  window.toggleCardColor = function (card) {
    card.classList.toggle("selected");
  };
});

// products sections
// script.js

const products = [
  {
    id: 1,
    name: "Product Name 1",
    price: "$75.00",
    salePrice: "$59.00",
    image: "imges/product1 (1).jpg",
    description:
      "Product 1 description goes here. This is a detailed description of the product, its features, benefits, and other relevant information.",
  },
  {
    id: 2,
    name: "Product Name 2",
    price: "$75.00",
    salePrice: "$59.00",
    image: "imges/product1 (2).jpg",
    description:
      "Product 2 description goes here. This is a detailed description of the product, its features, benefits, and other relevant information.",
  },
  {
    id: 3,
    name: "Product Name 3",
    price: "$75.00 - $100.00",
    salePrice: "",
    image: "imges/product1 (6).jpg",
    description:
      "Product 3 description goes here. This is a detailed description of the product, its features, benefits, and other relevant information.",
  },
  {
    id: 4,
    name: "Product Name 4",
    price: "$75.00 - $100.00",
    salePrice: "",
    image: "imges/product1 (3).jpg",
    description:
      "Product 4 description goes here. This is a detailed description of the product, its features, benefits, and other relevant information.",
  },
];

function viewProduct(id) {
  const product = products.find((p) => p.id === id);
  localStorage.setItem("product", JSON.stringify(product));
  window.location.href = "product.html";
}

function loadProduct() {
  const product = JSON.parse(localStorage.getItem("product"));
  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    if (product.salePrice) {
      document.getElementById("product-sale-price").textContent =
        product.salePrice;
      document.getElementById("product-sale-price-container").style.display =
        "block";
    } else {
      document.getElementById("product-sale-price-container").style.display =
        "none";
    }
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent =
      product.description;
  }
}

// Call loadProduct on product description page load
if (window.location.pathname.endsWith("product.html")) {
  document.addEventListener("DOMContentLoaded", loadProduct);
}
//  shop all page
document.addEventListener("DOMContentLoaded", function () {
  // Handle newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');

    if (emailInput.value) {
      alert("Thank you for subscribing with email: " + emailInput.value);
      emailInput.value = ""; // Clear the input
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
