var link = document.querySelector(".header-search");

var popup = document.querySelector(".search-conteiner");

var form = popup.querySelector("form");
var date = popup.querySelector("[name=date-in]");
var date1 = popup.querySelector("[name=date-out]");
var count = popup.querySelectorAll("[name=count]");
var storage = localStorage.getItem("date");

popup.classList.toggle("search-conteiner-none");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("search-conteiner-none");
  if (storage) {
    date.value = storage;
    count.focus();
  } else {
    date.focus();
  }
});
form.addEventListener("submit", function (event) {
  if (!date.value || !date1.value || !count[0].value || !count[1].value) {
    event.preventDefault();
    popup.classList.remove("search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-error");
  } else {
    localStorage.setItem("date", date.value);
  }
});