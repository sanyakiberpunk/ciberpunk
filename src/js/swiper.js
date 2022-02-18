import { swiperOpener } from "./swipers.js";

var showAllButton = document.querySelector(".show-all-button");
var swiperSlide = document.querySelectorAll(".swiper__slide-custom-style");
var showAllButton__text = document.querySelector(".show-all-button__text");
var showAllButton__arow = document.querySelector(".show-all-button__arow");
var fakeSlide = document.querySelector("#swiper__fake");
var clickCounter = 0;

showAllButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (clickCounter === 0) {
    clickCounter += 1;
    fakeSlide.style.display = "block";
    fakeSlide.style.visibility = "hidden";
  } else {
    clickCounter -= 1;
    fakeSlide.style.display = "none";
  }
  swiperOpener(showAllButton__text, showAllButton__arow, swiperSlide);
});
