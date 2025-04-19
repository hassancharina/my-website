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
const typingText = document.querySelector(".typing-text");
const phrases = ["Computer Engineering Student", "Web Developer", "Tech Explorer"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  typingText.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingText.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typingText.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

loop();
// ------------------------------
// Hide/Show Header on Scroll
// ------------------------------
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0"; 
  } else {
    header.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});
