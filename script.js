document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS library
  // AOS.init is already called in your HTML. If you move it here, ensure it's called only once.
  // For now, keeping it in HTML as you had it.

  // Get the button
  const backToTopBtn = document.getElementById("backToTopBtn");
  const aboutSection = document.getElementById("about");

  // When the user scrolls down, show the button, but not on the "about" section
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    // Get the current scroll position
    const currentScrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    // Get the height of the "about" section
    const aboutSectionHeight = aboutSection.offsetHeight;

    // Show the button if scrolled past the "about" section, otherwise hide it
    if (currentScrollPos > aboutSectionHeight) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document (or the 'about' section)
  backToTopBtn.addEventListener("click", function () {
    // Option 1: Scroll to the very top of the page
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });

    // Option 2: Scroll to the 'about' section (as per your request)
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
