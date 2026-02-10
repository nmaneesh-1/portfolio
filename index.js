//
const Togglebutton = document.querySelector(".nav-toggle");
const Navmenu = document.querySelector(".navbar-menu");
Togglebutton.addEventListener("click", function () {
  Navmenu.classList.toggle("active");
  Togglebutton.classList.toggle("active");
});
//
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#user-email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const form = document.querySelector("form");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach(function (error) {
    error.textContent = "";
    error.style.display = "none";
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();
  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    isValid = false;
    nameError.textContent = "Enter your name";
    nameError.style.display = "block";
  }

  if (emailValue === "") {
    isValid = false;
    emailError.textContent = "Enter your email";
    emailError.style.display = "block";
  } else if (!emailPattern.test(emailValue)) {
    isValid = false;
    emailError.textContent = "Enter a valid email";
    emailError.style.display = "block";
  }

  if (subjectValue === "") {
    isValid = false;
    subjectError.textContent = "Enter subject";
    subjectError.style.display = "block";
  }

  if (messageValue === "") {
    isValid = false;
    messageError.textContent = "Enter your message";
    messageError.style.display = "block";
  }

  if (isValid) {
    alert(`Message sent successfully!
Name: ${nameValue}
Email: ${emailValue}
Subject: ${subjectValue}
Message: ${messageValue}`);
    form.reset();
  }
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    nameError.textContent = "";
    nameError.style.display = "none";
  }
});

emailInput.addEventListener("input", function () {
  if (emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "";
    emailError.style.display = "none";
  }
});

subjectInput.addEventListener("input", function () {
  if (subjectInput.value.trim() !== "") {
    subjectError.textContent = "";
    subjectError.style.display = "none";
  }
});

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim() !== "") {
    messageError.textContent = "";
    messageError.style.display = "none";
  }
});
