const navContainer = document.getElementById("nav_container");
const navLinks = document.querySelectorAll(".nav_links");
const closeBtn = document.getElementById("close_btn");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navContainer.classList.toggle("left-[0]");
});

closeBtn.addEventListener("click", () => {
  navContainer.classList.toggle("left-[0]");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.classList.toggle("left-[0]");
  });
});
