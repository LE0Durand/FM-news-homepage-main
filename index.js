const burger = document.querySelector(".burger-icon");
const navMenu = document.querySelector(".navigation__menu");
const closeIcon = document.querySelector(".navigation__menu--close");
let originalBodyOverflow = document.body.style.overflow;

burger.addEventListener("click", function () {
  navMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", function () {
  navMenu.style.display = "none";
  document.body.style.overflow = originalBodyOverflow;
});
