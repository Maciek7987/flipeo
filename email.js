const input = document.querySelector("input.form__email-text");
const statutCheckbox = document.getElementById("cb");
const privacyCheckbox = document.getElementById("cb2");
const statutCheckboxFrame = document.querySelector(".cb__box-path");
const privacyCheckboxFrame = document.querySelector(".cb2__box-path");
const form = document.forms["email"];
const span = document.querySelector(".error-message");

const validation = () => {
  //regular expression to vailidate emial input
  const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const emailValue = input.value;

  if (
    privacyCheckbox.checked &&
    statutCheckbox.checked &&
    reg.test(emailValue)
  ) {
    span.innerHTML = "";
    input.style.border = "1px solid transparent";
    statutCheckboxFrame.style.stroke = "";
    privacyCheckboxFrame.style.stroke = "";
  } else {
    if (!statutCheckbox.checked) {
      span.innerHTML = "zaznacz wymagane pola";
      statutCheckboxFrame.style.stroke = "red";
    }
    if (!privacyCheckbox.checked) {
      span.innerHTML = "zaznacz wymagane pola";
      privacyCheckboxFrame.style.stroke = "red";
    }

    if (!reg.test(emailValue)) {
      input.style.border = "1px solid red";
      span.innerHTML = "podaj poprawny adres e-mail";
    }
    return console.log("stop");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
