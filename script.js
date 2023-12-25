document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 100) {
      header.style.backgroundColor = "rgba(51, 51, 51 , .5)"; // Change background color when scrolled
    } else {
      header.style.backgroundColor = "#333"; // Default background color
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    scrollToTop();
  });

  function scrollToTop() {
    var scrollDuration = 900;
    var scrollStep = -window.scrollY / (scrollDuration / 15);

    var scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
});
