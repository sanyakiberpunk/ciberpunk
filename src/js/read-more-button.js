var readMoreButton = document.querySelector(".read-more-button");
var readMoreButton__arow = document.querySelector(".read-more-button__arow");
var readMoreButton__text = document.querySelector(".read-more-button__text");
var informationBox__text = document.querySelector(".information-box_text");
var informationBox__p = informationBox__text.querySelectorAll("p, span");

var textOpener = function (buttonText, buttonArow, paragraphs) {
  if (buttonText.innerHTML === "Читать далее") {
    buttonText.innerHTML = "Скрыть";
    buttonArow.classList.add("read-more-button__arow_rotate");
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].classList.add("read-more-button__text_show");
    }
  } else {
    buttonText.innerHTML = "Читать далее";
    buttonArow.classList.remove("read-more-button__arow_rotate");
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].classList.remove("read-more-button__text_show");
    }
  }
};

readMoreButton.addEventListener("click", function (evt) {
  evt.preventDefault;
  textOpener(readMoreButton__text, readMoreButton__arow, informationBox__p);
});
