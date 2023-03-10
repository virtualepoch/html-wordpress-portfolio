///////////////////////////////////////////////////////////////////
// DOCUMENT SCROLL FUNCTIONS /////////////////////////////////////
/////////////////////////////////////////////////////////////////
function scrollToTop() {
  window.scrollTo(0, 0);
}

function showScrollTopBtn() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".button-to-top").classList.add("open");
  } else {
    document.querySelector(".button-to-top").classList.remove("open");
  }
}

window.onscroll = function () {
  showScrollTopBtn();
  contentRowOpen();
};

///////////////////////////////////////////////////////////////////
// ON VISIBILITY CHANGE FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////////////////////////

function isInViewPort(element) {
  innerHeightRatio = 0.8;

  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight * innerHeightRatio || document.documentElement.clientHeight * innerHeightRatio);
  // && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function contentRowOpen() {
  const contentRowContainers = document.getElementsByClassName("content-row-container");

  for (let i = 0; i < contentRowContainers.length; i++) {
    if (isInViewPort(contentRowContainers[i])) {
      contentRowContainers[i].classList.add("open");
    } else if (!isInViewPort(contentRowContainers[i])) {
      contentRowContainers[i].classList.remove("open");
    }
  }
}

///////////////////////////////////////////////////////////////////
// OPEN-CLOSE NAVIGATION MENU ////////////////////////////////////
/////////////////////////////////////////////////////////////////
const buttonNavMenu = document.querySelector(".button-nav-menu");
const navMenu = document.querySelector(".nav-menu");

function openCloseNavMenu() {
  navMenu.classList.toggle("open");
  buttonNavMenu.classList.toggle("open");
}

/////////////////////////////////////////////////////////////////
// OPEN-CLOSE CONTACT OVERLAY //////////////////////////////////
///////////////////////////////////////////////////////////////

const contactOverlay = document.querySelector(".contact-overlay-container");

function openCloseContactOverlay() {
  contactOverlay.classList.toggle("open");
  contactOverlayScrollToTop();
}

function contactOverlayScrollToTop() {
  contactOverlay.scrollTo(0, 0);
}

const contactBtns = document.getElementsByClassName("button-open-contact-overlay");

for (let i = 0; i < contactBtns.length; i++) {
  contactBtns[i].addEventListener("click", openCloseContactOverlay);
}

// OPEN-CLOSE RESUME PAGE ////////////////////////////////////////
const resumePage = document.getElementById("resume-page");

function openCloseResumePage() {
  resumePage.classList.toggle("open");
}

const resumeDownloadPrompt = document.querySelector(".resume-download-prompt");

function openCloseDownloadPrompt() {
  resumeDownloadPrompt.classList.toggle("open");
}

///////////////////////////////////////////////////////////////////
// SWIPE EVENTS //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

window.addEventListener(
  "load",
  function () {
    var touchSurface = document.querySelector(".contact-overlay-container"),
      startX,
      startY,
      dist,
      threshold = 50, //required min distance traveled to be considered swipe
      allowedTime = 200, // maximum time allowed to travel that distance
      elapsedTime,
      startTime;

    function handleSwipe(isUpSwipe) {
      if (isUpSwipe) touchSurface.classList.remove("open");
    }

    touchSurface.addEventListener(
      "touchstart",
      function (e) {
        var touchObject = e.changedTouches[0];
        dist = 0;
        startX = touchObject.pageX;
        startY = touchObject.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
        // e.preventDefault();
      },
      false
    );

    touchSurface.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); // prevent scrolling when inside DIV
      },
      false
    );

    touchSurface.addEventListener(
      "touchend",
      function (e) {
        var touchObject = e.changedTouches[0];
        dist = startY - touchObject.pageY; // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swipeUpBol = elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchObject.pageX - startX && startX - touchObject.pageX) <= 50;
        handleSwipe(swipeUpBol);
        // e.preventDefault();
      },
      false
    );
  },
  false
); // end window.onload
