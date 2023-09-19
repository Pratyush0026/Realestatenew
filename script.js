



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

////////////ADDED-FEATURES/////////////////////////////////////

//Scrolling down on clicking Rent-Out//


const btnScrollFrom = document.querySelector(".scroll");
const sectionScrollTo = document.querySelector(".rentout");

btnScrollFrom.addEventListener('click', function (e) {
  const sectionCoords = sectionScrollTo.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left + window.pageXOffset, top: sectionCoords.top + window.pageYOffset - 280,
    behavior: "smooth",
  })
})

//Fetching location of the user to input it in location input//



const inputClick = document.querySelector(".locate");
const display = function (latitude, longitude) {

  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Fetching Location Taking Time${response.status}`)

      }
      return response.json()
    }
    )
    .then(data => {
      console.log(data)
      console.log(`You are in ${data.city},${data.country} `)
      inputClick.value = `${data.city},${data.country} `
    })
    .catch(err => {
      console.error(`Something Went Wrong. ${err.message}`)
    });
}
const fetchLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        //console.log(position)
        const { latitude } = position.coords
        const { longitude } = position.coords

        // console.log(latitude, longitude);
        // console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`)

        const coords = [latitude, longitude]

        display(latitude, longitude)


      })
  }
}




inputClick.addEventListener('click', function () {

  fetchLocation()

})
