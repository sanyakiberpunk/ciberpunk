var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

var modalCall__container = document.querySelector(".modal-call__container");
var icon_call = document.querySelectorAll(".icon_call");
var menu = document.querySelector(".menu-container");
var modalFeed__container = document.querySelector(".modal-feed__container");

for (var i = 0; i < icon_call.length; i++) {
  icon_call[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCall__container.classList.add("modal-call__container_show");
    modalFeed__container.classList.remove("modal-feed__container_show");
    menu.classList.add("grey-blur");
    for (var i = 0; i < greyBlurObjects.length; i++) {
      greyBlurObjects[i].classList.add("grey-blur");
    }
  });
}
