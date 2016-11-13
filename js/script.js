var link = document.querySelector(".header-search");

var popup = document.querySelector(".search-conteiner");

var form = popup.querySelector("form");
var date = popup.querySelector("[name=date-in]");
var date = popup.querySelector("[name=date-out]");
var count = popup.querySelectorAll("[name=count");

popup.classList.toggle("search-conteiner-none");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("search-conteiner-none");
  date.focus();
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!date.value || !count.value) {
    event.preventDefault();
    popup.classList.add("search-error");

  }
});