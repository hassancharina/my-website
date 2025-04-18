// ------------------------------
// Scroll to Top Button
// ------------------------------
const toTopBtn = document.getElementById("toTopBtn");

// Show/hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
toTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// ------------------------------
// Date and Time Display
// ------------------------------
function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById("date-time").textContent = `Current date and time: ${dateTimeString}`;
}

// Run it once on load
updateDateTime();

// Optional: Update every second
setInterval(updateDateTime, 1000);