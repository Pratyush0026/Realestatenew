



/*
  add event on element
 */

const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}



/*
  navbar 
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const favo = document.querySelectorAll(".card-action-btn");
const jugaad = document.querySelector(".sign-up");

jugaad.addEventListener("click", function () {
  alert("Database doesn't exist yet");
});

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);



/*
  add active class on header & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");


for (let i = 0; i < favo.length; i++) {
  favo[i].addEventListener("click", function () {
    if (favo[i].style.color === "red") {
      favo[i].style.color = ""; // Revert to the original color
    } else {
      favo[i].style.color = "red";
    }
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/*
  hero tab button
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function () {
  lastClickedTabBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab);