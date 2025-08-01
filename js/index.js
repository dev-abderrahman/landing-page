const navBar = document.querySelector(".nav-bar");
const hero = document.querySelector(".hero-section");
let heroHeight = hero.clientHeight;
console.log(heroHeight);
window.addEventListener("scroll", () => {
  if (window.scrollY >= heroHeight) {
    navBar.classList.add("toggle-nav-bar");
  } else {
    navBar.classList.remove("toggle-nav-bar");
  }
});
