// noinspection JSValidateTypes

document.addEventListener("DOMContentLoaded", function () {
  const gameDescription = document.querySelector(".game-description");
  const imageContainerRight = document.querySelector(".image-container-right");
  const image = imageContainerRight.querySelector("img");
  const scrollToTopLink = document.querySelector("header a");

  let animationStarted = false;

  window.addEventListener("scroll", function () {
    // Визначаємо позицію прокрутки сторінки та висоту вікна браузера
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPosition = gameDescription.offsetTop - windowHeight / 2;

    if (scrollPosition >= triggerPosition && !animationStarted) {
      animationStarted = true;
      gameDescription.style.opacity = Math.min(1, (scrollPosition - triggerPosition) / windowHeight);
      imageContainerRight.style.opacity = Math.min(1, (scrollPosition - triggerPosition) / windowHeight);

      setTimeout(function () {
        gameDescription.style.opacity = 1;
        imageContainerRight.style.opacity = 1;
      }, 1000);
    }
  });

  image.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalImage = document.createElement("img");
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    modal.addEventListener("click", function () {
      modal.remove();
    });
  });

  scrollToTopLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
