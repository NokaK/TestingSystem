function checkRepeat() {
  if (
    document.getElementById("password").value !==
    document.getElementById("repeat_password").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".reset_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".regist_btn").disabled = false;
  }
}

function slideRegistration() {
  let registration = document.querySelector(".regist");
  registration.classList.toggle("hidden");
  let authForm = document.querySelector(".login");
  authForm.classList.toggle("hidden");

  setTimeout(function () {
    let regSlider = document.querySelector(".regist_slider");
    regSlider.classList.toggle("hidden");

    let authSlider = document.querySelector(".login_slider");
    authSlider.classList.toggle("hidden");

    let background = document.querySelector(".blue_bg");
    background.classList.toggle("transform");
  }, 1);
}

let regSliderBtn = document.querySelector(".regist_slider_btn");
regSliderBtn.addEventListener("click", slideRegistration);

let authSliderBtn = document.querySelector(".login_slider_btn");
authSliderBtn.addEventListener("click", slideRegistration);

const email = document.getElementById("login_email");
const loginPassword = document.getElementById("login_password");
const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    email.value === "" ||
    email.value === null ||
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    email.classList.add("error_syle");
    document.querySelector(".warning_email").innerHTML =
      "მეილის ფორმატი არასწორია";

    // document.querySelector(".input_error").innerHTML =
    //   " გთხოვთ შეიყვანოთ მეილის მისამართი";
  } else if (loginPassword.value === "" || loginPassword.value === null) {
    loginPassword.classList.add("error_syle");
    loginPassword.placeholder = " შეავსეთ ყველა ველი";
  } else {
    location.href = "profile.html";
  }
});

// registration validation

const regForm = document.getElementById("regist_form");
const regEmail = document.querySelector(".regist_email");
const regName = document.getElementById("name");
const regSurname = document.getElementById("surname");
const regPassword = document.getElementById("password");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(regName.value);
  if (
    email.value === "" ||
    email.value === null ||
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    email.classList.add("error_syle");
    document.querySelector(".warning_email").innerHTML =
      "მეილის ფორმატი არასწორია";
  }
  if (regName.value === "" || regName.value === null) {
    const warnName = document.querySelector(".warning_name");
    warnName.classList.add("warning");
    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  }

  if (/\p{Letter}/u.test(regName.value) === false) {
    document.querySelector(".warning_name").innerHTML =
      "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else {
    document.querySelector(".warning_name").innerHTML = "";
  }

  if (regSurname.value === "" || regSurname.value === null) {
    const warnSurname = document.querySelector(".warning_surname");
    warnSurname.classList.add("warning");
    warnSurname.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else {
    document.querySelector(".warning_surname").innerHTML = "";
  }

  if (/\p{Letter}/u.test(regSurname.value) === false) {
    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  }
  if (regPassword.value === "" || regPassword.value === null) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
  }
});
