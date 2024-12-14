const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const startbutton = document.querySelector(".start-button");
startbutton.addEventListener("click", function () {
  window,location.href = "getstarted.html"
});
