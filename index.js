// document.onload(insertNameTitle());
// document.querySelector("body").addEventListener("onload", insertNameTitle());
// setTimeout(function () {
//     insertNameTitle();
// }, 4000);

function insertNameTitle() {
  var name = "Craig Kaufman";
  var title = "Front-End Web Developer";
  document.getElementById("name").innerHTML = name;
  document.getElementById("title").innerHTML = title;
  document.querySelector(".hello").classList.add("load");
  document.querySelector(".hero-heading").classList.add("load");
  document.querySelector(".hero-content").classList.add("load");
}
insertNameTitle();

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("to-top-btn").classList.add("open");
  } else {
    document.getElementById("to-top-btn").classList.remove("open");
  }
}

const pageContentRow1 = document.querySelector(".content-row.row-1");

function pageContentRow1Open() {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    pageContentRow1.classList.add("open");
  } else if (document.body.scrollTop <= 50 || document.documentElement.scrollTop <= 50) {
    pageContentRow1.classList.remove("open");
  }
}

window.addEventListener("scroll", pageContentRow1Open);

// OPEN CLOSE NAVIGATION MENU //////////////////////////////////
const btnNavMenu = document.getElementById("btn-nav-menu");
const navMenu = document.getElementById("nav-menu");

function openCloseNavMenu() {
  navMenu.classList.toggle("open");
  btnNavMenu.classList.toggle("open");
}

///////////////////////////////////////////////////////////////////////
// OPEN CLOSE CONTACT OVERLAY ////////////////////////////////////////

const contactOverlay = document.querySelector(".contact-overlay-container");

function openCloseContactOverlay() {
  contactOverlay.classList.toggle("open");
  contactOverlayScrollToTop();
}

const contactBtns = document.getElementsByClassName("btn-open-contact-overlay");

for (let i = 0; i < contactBtns.length; i++) {
  contactBtns[i].addEventListener("click", openCloseContactOverlay);
}

function contactOverlayScrollToTop() {
  contactOverlay.scrollTo(0, 0);
}
