const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");

function validateEmailAddress() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please provide a valid email address.";
    emailError.style.bottom = "-20px";
    emailError.style.fontStyle = "italic";

    emailField.style.border = "2px solid hsl(0, 94%, 66%)";

    return false;
  }
  emailError.innerHTML = "";
  emailField.style.border = "2px solid green";

  return true;
}
