// Buy Now buttons functionality
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".buy-now-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productCard = btn.closest(".product-card");
      const name = productCard.querySelector("h2").textContent;
      const price = productCard.querySelector("p").textContent.replace("₹", "");

      // Save item in localStorage
      localStorage.setItem("buyNowItem", JSON.stringify({ name, price }));

      // Redirect to payment page
      window.location.href = "payment.html";
    });
  });
});
