///////////////////////////////////////////////////////////////////
// DOCUMENT ON-LOAD FUNCTIONS ////////////////////////////////////
/////////////////////////////////////////////////////////////////

// document.onload(onloadAddClass());
// document.querySelector("body").addEventListener("onload", onloadAddClass());
// setTimeout(function () {
//     onloadAddClass();
// }, 4000);

function onloadAddClass() {
  document.querySelector(".hello").classList.add("load");
  document.querySelector(".hero-heading").classList.add("load");
  document.querySelector(".hero-content").classList.add("load");
}

onloadAddClass();

///////////////////////////////////////////////////////////////////
// DOCUMENT SCROLL FUNCTIONS /////////////////////////////////////
/////////////////////////////////////////////////////////////////

function scrollToTop() {
  window.scrollTo(0, 0);
}

function scroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("to-top-btn").classList.add("open");
  } else {
    document.getElementById("to-top-btn").classList.remove("open");
  }
}

// OPEN/CLOSE PAGE ROWS

// function pageContentRow1Open() {
//   const scrollTest = 350;
//   if (document.body.scrollTop >= scrollTest || document.documentElement.scrollTop >= scrollTest) {
//     contentRows.classList.add("open");
//   } else if (document.body.scrollTop <= scrollTest || document.documentElement.scrollTop <= scrollTest) {
//     contentRows.classList.remove("open");
//   }
// }

window.onscroll = function () {
  scroll();
  contentRow1Open();
  // pageContentRow1Open();
};

// window.addEventListener("scroll", scroll, pageContentRow1Open);

///////////////////////////////////////////////////////////////////
// ON VISIBILITY CHANGE FUNCTIONS /////////////////////////////////////
/////////////////////////////////////////////////////////////////
innerHeightRatio = 0.7;

function isInViewPort(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight * innerHeightRatio || document.documentElement.clientHeight * innerHeightRatio);
  // && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

const contentRowContainers = document.getElementsByClassName("content-row-container");
const contentRows = document.getElementsByClassName("content-row");

function contentRow1Open() {
  // element = contentRowContainers[0];

  for (let i = 0; i < contentRowContainers.length; i++) {
    if (isInViewPort(contentRowContainers[i])) {
      contentRowContainers[i].classList.add("open");
    } else if (!isInViewPort(contentRowContainers[i])) {
      contentRowContainers[i].classList.remove("open");
    }
  }
}

/////////////////////////////////////////////////////////////////
// OPEN CLOSE NAVIGATION MENU //////////////////////////////////
const btnNavMenu = document.getElementById("btn-nav-menu");
const navMenu = document.getElementById("nav-menu");

function openCloseNavMenu() {
  navMenu.classList.toggle("open");
  btnNavMenu.classList.toggle("open");
}

/////////////////////////////////////////////////////////////////
// OPEN CLOSE CONTACT OVERLAY //////////////////////////////////

const contactOverlay = document.querySelector(".contact-overlay-container");

function openCloseContactOverlay() {
  contactOverlay.classList.toggle("open");
  contactOverlayScrollToTop();
}

function contactOverlayScrollToTop() {
  contactOverlay.scrollTo(0, 0);
}

const contactBtns = document.getElementsByClassName("btn-open-contact-overlay");

for (let i = 0; i < contactBtns.length; i++) {
  contactBtns[i].addEventListener("click", openCloseContactOverlay);
}
