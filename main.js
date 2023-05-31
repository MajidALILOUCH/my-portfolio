// Light Mode

// check for saved 'darkMode' in localStorage
let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#light-mode-toggle");

const enablelightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("lightmode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disablelightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("lightmode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", null);
};

// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === "enabled") {
  enablelightMode();
}

// When someone clicks the button
lightModeToggle.addEventListener("click", () => {
  // get their lightMode setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enablelightMode();
    // if it has been enabled, turn it off
  } else {
    disablelightMode();
  }
});

// header

const header = document.querySelector("header");
let prevScrollPos = window.pageYOffset;
const scrollThreshold = 10;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (
    prevScrollPos > currentScrollPos &&
    prevScrollPos - currentScrollPos > scrollThreshold
  ) {
    // Scrolling up
    header.style.transform = "translateY(0)";
    header.style.height = "80px";
    header.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.1)";
    header.style.visibility = "visible";
  } else if (
    prevScrollPos < currentScrollPos &&
    currentScrollPos - prevScrollPos > scrollThreshold
  ) {
    // Scrolling down
    header.style.transform = `translateY(-${header.offsetHeight}px)`;
    header.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.1)";
    header.style.visibility = "hidden";
  }

  if (currentScrollPos === 0) {
    // At the top of the page
    header.style.transform = "translateY(0)";
    header.style.boxShadow = "none";
    header.style.height = "100px";
    header.style.visibility = "visible";
  }

  prevScrollPos = currentScrollPos;
});

// Nav Menu

let overlay = document.querySelector(".overlay");
let ul = document.querySelector("header ul");
let close = document.querySelector(".close");
let ulLinks = document.querySelectorAll("header ul li a");
let toggler = document.querySelector(".toggle");

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";
});

let openNav = () => {
  ul.classList.add("open");
  overlay.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden";
};

let closeNav = () => {
  ul.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden";
};

toggler.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
// to close the nav when we click on a link because we want to see the section
ulLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

// nav buttons

const buttons = document.querySelectorAll(".nav-buttons button");
const sections = document.querySelectorAll("section");
const sectionIds = [];

for (let i = 0; i < sections.length; i++) {
  if (sections[i].id != "") sectionIds.push(sections[i].id);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const sectionId = sectionIds[index];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.onscroll = function () {
  sections.forEach((section, index) => {
    // offsetTop => es la parte superior del (section)
    if (window.scrollY >= section.offsetTop - 5) {
      // when we are at the section that w want w remove the active class from all the buttons
      buttons.forEach((button, buttonIndex) => {
        button.classList.remove("active");

        // if the button has the same index as the section we add it an active class
        if (buttonIndex == index) {
          button.classList.add("active");
        }
      });
    }
  });
};

// other projects show more button

// Retrieve the necessary elements
const showMoreButton = document.getElementById("show-more-button");
const hiddenProjects = document.querySelectorAll(".project.hidden");

// Add an event listener to the "Show More" button
showMoreButton.addEventListener("click", function () {
  // Loop through hidden projects and toggle their visibility
  hiddenProjects.forEach(function (project) {
    project.classList.toggle("hidden");
  });

  // Change the button text based on the current visibility state
  if (showMoreButton.innerText === "Show More") {
    showMoreButton.innerText = "Show Less";
  } else {
    showMoreButton.innerText = "Show More";
  }
});
