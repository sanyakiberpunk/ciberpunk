const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  height: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var destroySize = window.matchMedia("(min-width: 768px)").matches;

var swiperOpener = function (buttonText, buttonArow, slides) {
  if (buttonText.innerHTML === "Показать всё") {
    buttonText.innerHTML = "Скрыть";
    buttonArow.classList.add("show-all-button__arow_rotate");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add("swiper-slide_show");
    }
  } else {
    buttonText.innerHTML = "Показать всё";
    buttonArow.classList.remove("show-all-button__arow_rotate");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("swiper-slide_show");
    }
  }
};

window.addEventListener("load", function () {
  if (destroySize) {
    swiper[0].destroy();
    swiper[1].destroy();
    swiper[2].destroy();
  }
});

export { swiperOpener };
