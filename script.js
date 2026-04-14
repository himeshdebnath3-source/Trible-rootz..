let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  let totalDisplay = document.getElementById("total");

  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    list.appendChild(li);
  });

  totalDisplay.textContent = total;
}

function checkout() {
  document.getElementById("paymentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}

function payNow() {
  alert("Payment Successful!");
  cart = [];
  total = 0;
  updateCart();
  closeModal();
}
