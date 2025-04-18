// زر الرجوع للأعلى
let toTopBtn = document.getElementById("toTopBtn");

// لما ينزل المستخدم شوي، بيظهر الزر
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// عند الضغط عليه بيرجع للأعلى
toTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};