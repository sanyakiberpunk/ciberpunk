var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

var modalCall__container = document.querySelector(".modal-call__container");
var X = document.querySelector(".modal-call__button-X");
var menu = document.querySelector(".menu-container");

X.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalCall__container.classList.remove("modal-call__container_show");
  menu.classList.remove("grey-blur");
  for (var i = 0; i < greyBlurObjects.length; i++) {
    greyBlurObjects[i].classList.remove("grey-blur");
  }
});
