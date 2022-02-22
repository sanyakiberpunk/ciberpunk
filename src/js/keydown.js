var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];
var menu = document.querySelector(".menu-container");
var modalFeed__container = document.querySelector(".modal-feed__container");
var modalCall__container = document.querySelector(".modal-call__container");

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    for (var i = 0; i < greyBlurObjects.length; i++) {
      greyBlurObjects[i].classList.remove("grey-blur");
    }
    modalFeed__container.classList.remove("modal-feed__container_show");
    modalCall__container.classList.remove("modal-call__container_show");
    menu.classList.remove("menu-container_show");
    menu.classList.remove("grey-blur");
  }
});
