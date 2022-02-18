import { swiperOpener } from "./swipers";

var showAllButton_2 = document.querySelector(".show-all-button-2");
var swiperSlide_2 = document.querySelectorAll(".swiper-2__slide-custom-style");
var showAllButton__text_2 = document.querySelector(".show-all-button-2__text");
var showAllButton__arow_2 = document.querySelector(".show-all-button-2__arow");
var fakeSlide_2 = document.querySelectorAll("#swiper-2__fake");
var clickCounter_2 = 0;

showAllButton_2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (clickCounter_2 === 0) {
    clickCounter_2 += 1;
    for (var i = 0; i < fakeSlide_2.length; i++) {
      fakeSlide_2[i].style.display = "block";
      fakeSlide_2[i].style.visibility = "hidden";
    }
  } else {
    clickCounter_2 -= 1;
    for (var i = 0; i < fakeSlide_2.length; i++) {
      fakeSlide_2[i].style.display = "none";
    }
  }
  swiperOpener(showAllButton__text_2, showAllButton__arow_2, swiperSlide_2);
});
