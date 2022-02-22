var burger = document.querySelector(".icon_burger");
var menu = document.querySelector(".menu-container");
var greyBlurObjects = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];

burger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("menu-container_show");
  for (var i = 0; i < greyBlurObjects.length; i++) {
    greyBlurObjects[i].classList.add("grey-blur");
  }
});

export { menu };
