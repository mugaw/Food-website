const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});



const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...ScrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...ScrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .section__description",{
  ...ScrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content .header__btn",{
  ...ScrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img",{
  ...ScrollRevealOption,
  origin:"left",
});

ScrollReveal().reveal(".explore__content .section__header",{
  ...ScrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".explore__content .section__description", {
  ...ScrollRevealOption,
  delay:1000,
});

ScrollReveal().reveal(".explore__content .explore__btn", {
  ...ScrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...ScrollRevealOption,
  interval:500,
});

ScrollReveal().reveal(".chef__image img", {
  ...ScrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".chef__content .section__header", {
  ...ScrollRevealOption,
  delay:500,
});

ScrollReveal().reveal(".chef__content .section__description", {
  ...ScrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".chef__list li", {
  ...ScrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});