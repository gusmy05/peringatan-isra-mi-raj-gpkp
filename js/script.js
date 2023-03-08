// Toggele Class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hambruger = document.querySelector("#hambruger-menu");

document.addEventListener("click", function (e) {
  if (!hambruger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
