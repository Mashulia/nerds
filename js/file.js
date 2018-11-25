var change = document.querySelectorAll(".item-links");
var wrapper = document.querySelector(".sliders-list");
var activeLink = 0;
var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

for(var i = 0; i < change.length; i++) {
  change[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    change.classList.add('active-links');
  });
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
