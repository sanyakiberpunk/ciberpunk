import { menu } from "./header__menu-button";

var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

var X = document.querySelector(".menu-container__button-X");

X.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-container_show");
  for (var i = 0; i < greyBlurObjects.length; i++) {
    greyBlurObjects[i].classList.remove("grey-blur");
  }
});
