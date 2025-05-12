// Store user bid in localStorage
function storeBidPreference(price) {
  localStorage.setItem("preferredBidPrice", price);
}

// Retrieve user bid from localStorage
function getBidPreference() {
  return localStorage.getItem("preferredBidPrice");
}

// Handle bid confirmation and trigger animation
function confirmBid() {
  const button = document.getElementById("confirmBidBtn");
  const bidInput = document.getElementById("bidPrice");
  const price = bidInput.value;

  if (!price) {
    alert("Please enter a bid price.");
    return;
  }

  // Store bid price
  storeBidPreference(price);

  // Animate button
  button.classList.add("animate");
  setTimeout(() => button.classList.remove("animate"), 400);

  // Notify user
  alert(`Your bid of KES ${price} has been placed!`);
}

// Load saved bid on page load
window.onload = function () {
  const savedBid = getBidPreference();
  if (savedBid) {
    document.getElementById("bidPrice").value = savedBid;
  }
};
