let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
  alert("Product added to cart!");
}

function searchProducts() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productName = product.innerText.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}