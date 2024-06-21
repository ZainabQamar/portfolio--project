// Function to load product details on product page
function loadProduct() {
  // Retrieve product data from localStorage
  const product = JSON.parse(localStorage.getItem("product"));

  // Check if product data exists
  if (product) {
    // Update DOM elements with product details
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;

    // Display sale price if available
    if (product.salePrice) {
      document.getElementById("product-sale-price").textContent =
        product.salePrice;
      document.getElementById("product-sale-price-container").style.display =
        "block";
    } else {
      document.getElementById("product-sale-price-container").style.display =
        "none";
    }

    // Set product image
    document.getElementById("product-image").src = product.image;

    // Set product description
    document.getElementById("product-description").textContent =
      product.description;
  }
}

// Call loadProduct function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadProduct);
