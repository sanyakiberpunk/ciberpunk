var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

var modalFeed__container = document.querySelector(".modal-feed__container");
var modalCall__container = document.querySelector(".modal-call__container");
var icon_write = document.querySelectorAll(".icon_write");
var menu = document.querySelector(".menu-container");

for (var i = 0; i < icon_write.length; i++) {
  icon_write[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeed__container.classList.add("modal-feed__container_show");
    modalCall__container.classList.remove("modal-call__container_show");
    menu.classList.add("grey-blur");
    for (var i = 0; i < greyBlurObjects.length; i++) {
      greyBlurObjects[i].classList.add("grey-blur");
    }
  });
}
