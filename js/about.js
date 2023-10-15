const scrollToTopLink = document.querySelector("header a");
scrollToTopLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const columns = document.querySelectorAll('.column');
columns.forEach(column => {
  column.addEventListener('mouseenter', () => {
    column.style.transform = 'translateX(50%)';
  });
  column.addEventListener('mouseleave', () => {
    column.style.transform = 'translateX(0)';
  });
});
