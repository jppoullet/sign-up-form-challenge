"use strict";

const inputs = ["firstName", "lastName", "email", "password"];

// Adding Event Listeners for change
inputs.forEach((inputName) => {
  document
    .querySelector(`input[name=${inputName}]`)
    .addEventListener("change", function (event) {
      const label = document.querySelector(`label[for=${inputName}]`);

      label.style.display = "none";
    });
});

// Adding event listeners for invalid
inputs.forEach((inputName) => {
  document
    .querySelector(`input[name=${inputName}]`)
    .addEventListener("invalid", function (event) {
      const label = document.querySelector(`label[for=${inputName}]`);

      if (event.target.validity.valueMissing) {
        label.style.display = "flex";
      }
    });
});

// Instead of having two seperate forEach(), you can just put both inside one forEach()

// My original code below

// const inputFirstName = document.querySelector("input[name='firstName']");
// const inputLastName = document.querySelector("input[name='lastName']");
// const inputEmail = document.querySelector("input[name='email']");
// const inputPassword = document.querySelector("input[name='password']");

// inputFirstName.addEventListener("invalid", function (event) {
//   if (event.target.validity.valueMissing) {
//     document.querySelector('label[for="firstName"]').style.display = "flex";
//   }
// });

// inputFirstName.addEventListener("change", function (event) {
//   document.querySelector("label[for='firstName']").style.display = "none";
// });

// inputLastName.addEventListener("invalid", function (event) {
//   if (event.target.validity.valueMissing) {
//     document.querySelector('label[for="lastName"]').style.display = "flex";
//   }
// });

// inputLastName.addEventListener("change", function (event) {
//   document.querySelector("label[for='lastName']").style.display = "none";
// });

// inputEmail.addEventListener("invalid", function (event) {
//   if (event.target.validity.valueMissing) {
//     document.querySelector('label[for="email"]').style.display = "flex";
//   }
// });

// inputEmail.addEventListener("valid", function (event) {
//   document.querySelector("label[for='email']").style.display = "none";
// });

// inputPassword.addEventListener("invalid", function (event) {
//   if (event.target.validity.valueMissing) {
//     document.querySelector('label[for="password"]').style.display = "flex";
//   }
// });

// inputPassword.addEventListener("change", function (event) {
//   document.querySelector("label[for='password']").style.display = "none";
// });
