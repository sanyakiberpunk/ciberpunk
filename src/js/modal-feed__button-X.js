var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

var modalFeed__container = document.querySelector(".modal-feed__container");
var X = document.querySelector(".modal-feed__button-X");
var menu = document.querySelector(".menu-container");

X.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeed__container.classList.remove("modal-feed__container_show");
  menu.classList.remove("grey-blur");
  for (var i = 0; i < greyBlurObjects.length; i++) {
    greyBlurObjects[i].classList.remove("grey-blur");
  }
});
