function checkRepeat() {
  if (
    document.getElementById("password").value !==
    document.getElementById("repeat_password").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".save_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".save_btn").disabled = false;
  }
}

const resetForm = document.querySelector(".reset_password_form");
resetForm.addEventListener("submit", (e) => {
  console.log("test");
  e.preventDefault();
  const passwordInput = document.querySelector("#password").value;
  const ResPasswordInput = document.querySelector("#repeat_password").value;
  if (!passwordInput || !ResPasswordInput) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
  } else {
    document.querySelector(".warning_password").innerHTML = null;
  }
});
