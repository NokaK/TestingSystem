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

  const rgx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const r = rgx.test(email.value);
  console.log(r);
  console.log(email.value);

  if (
    loginPassword.value === "" ||
    loginPassword.value === null ||
    email.value === "" ||
    email.value === null
  ) {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML = "შეავსეთ ყველა ველი";
  } else if (r === false) {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML =
      "მეილის ფორმატი არასწორია";
  } else {
    location.href = "profile.html";
  }
});

// registration validation

const regForm = document.getElementById("regist_form");
const regEmail = document.querySelector("#regist_email");
const regName = document.getElementById("name");
const regSurname = document.getElementById("surname");
const regPassword = document.getElementById("password");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const rgx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const r = rgx.test(regEmail.value);
  console.log(r);

  if (r === false) {
    const warnEmail = document.querySelector(".reg_warning_email");
    warnEmail.classList.add("error_style");
    warnEmail.innerHTML = "მეილის ფორმატი არასწორია";
    console.log(warnEmail);
  }
  // if (
  //   email.value === "" ||
  //   email.value === null ||
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //     email.value
  //   )
  // ) {
  //   email.classList.add("error_syle");
  //   document.querySelector(".warning_email").innerHTML =
  //     "მეილის ფორმატი არასწორია";
  // }
  if (regName.value === "" || regName.value === null) {
    const warnName = document.querySelector(".warning_name");

    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  } else if (regName.value > 0 && /\p{Letter}/u.test(regName.value) === false) {
    document.querySelector(".warning_name").innerHTML =
      "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else {
    document.querySelector(".warning_name").innerHTML = "";
  }

  if (regSurname.value === "" || regSurname.value === null) {
    const warnSurname = document.querySelector(".warning_surname");
    // warnSurname.classList.add("warning");
    warnSurname.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else if (
    regSurname.value.length > 0 &&
    /\p{Letter}/u.test(regSurname.value) === false
  ) {
    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
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
