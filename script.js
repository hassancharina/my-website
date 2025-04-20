console.log("JavaScript is working!");
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


// Optional: Update every second
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
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // نازل لتحت
      header.style.top = "-100px";
    } else {
      // طالع لفوق
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
});
// ------------------------------
// Burger Menu Toggle
// ------------------------------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  console.log("menu clicked");
  navLinks.classList.toggle("show");
});
// لما المستخدم يكبس على أي رابط من القائمة، سكّر القائمة
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// خيار إضافي: لما تنزل بالصفحة، سكّر القائمة كمان
window.addEventListener('scroll', () => {
  navLinks.classList.remove('show');
});
