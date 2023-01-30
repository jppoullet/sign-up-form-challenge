"use strict";

const inputFirstName = document.querySelector("input[name='firstName']");
const inputLastName = document.querySelector("input[name='lastName']");
const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

inputFirstName.addEventListener("invalid", function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity(" ");
    document.querySelector("label[for='firstName']").textContent =
      "First Name cannot be empty";
  }
});

inputFirstName.addEventListener("change", function (event) {
  //   event.target.setCustomValidity("");
  document.querySelector("label[for='firstName']").textContent = "";
});

inputLastName.addEventListener("invalid", function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity(" ");
    document.querySelector("label[for='lastName']").textContent =
      "Last Name cannot be empty";
  }
});

inputLastName.addEventListener("change", function (event) {
  //   event.target.setCustomValidity("");
  document.querySelector("label[for='lastName']").textContent = "";
});

inputEmail.addEventListener("invalid", function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("INvalid Email");
    document.querySelector("label[for='email']").textContent =
      "Looks like this is not an email";
  }
});

inputEmail.addEventListener("valid", function (event) {
  event.target.setCustomValidity("");
  document.querySelector("label[for='email']").textContent = "";
});

inputPassword.addEventListener("invalid", function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity(" ");
    document.querySelector("label[for='password']").textContent =
      "Password cannot be empty";
  }
});

inputPassword.addEventListener("change", function (event) {
  //   event.target.setCustomValidity("");
  document.querySelector("label[for='Password']").textContent = "";
});
