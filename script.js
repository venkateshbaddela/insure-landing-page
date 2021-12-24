const closeBtn = document.querySelector(".head-nav__btn");
const nav = document.querySelector(".nav-box");
const btnImg = document.querySelector(".head-nav__btn-img");

let resizeTimer;

closeBtn.addEventListener("click", function (e) {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
    btnImg.src = "images/icon-hamburger.svg";
    document.body.style.overflow = "visible";
  } else {
    nav.classList.add("visible");
    btnImg.src = "images/icon-close.svg";
    document.body.style.overflow = "hidden";
  }
});

window.addEventListener("resize", function () {
  document.body.classList.add("preload");
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove("preload");
  }, 300);
});

window.matchMedia("(min-width:47em)").addEventListener("change", function () {
  btnImg.src = "images/icon-hamburger.svg";
  nav.classList.remove("visible");
  document.body.style.overflow = "visible";
});
