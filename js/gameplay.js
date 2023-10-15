const scrollToTopLink = document.querySelector("header a");
scrollToTopLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
