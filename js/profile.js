const subjectLi = document.getElementsByClassName("my_subject_li");
for (var i = 0; i < subjectLi.length; i++) {
  subjectLi[i].addEventListener("click", () => {
    const profileForm = document.querySelector(".profile_form_container");
    profileForm.classList.add("hidden");
    document.querySelector(".middle_section").classList.remove("hidden");
    console.log(profileForm);
  });
}

const students = document.querySelector(".students");
const tests = document.querySelector(".tests");
const teachers = document.querySelector(".teachers");
const testsSection = document.querySelector(".tests_section");
const studentsSection = document.querySelector(".students_section");
const teachersSection = document.querySelector(".teachers_section");

const remove = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
};

students.addEventListener("click", () => {
  remove(tests);
  remove(teachers);
  testsSection.classList.add("hidden");
  studentsSection.classList.remove("hidden");
  students.classList.add("active");
  teachersSection.classList.add("hidden");
});

tests.addEventListener("click", () => {
  studentsSection.classList.add("hidden");
  testsSection.classList.remove("hidden");
  tests.classList.add("active");
  teachersSection.classList.add("hidden");
  remove(students);
  remove(teachers);
});

teachers.addEventListener("click", () => {
  remove(tests);
  remove(students);
  studentsSection.classList.add("hidden");
  testsSection.classList.add("hidden");
  teachersSection.classList.remove("hidden");
  teachers.classList.add("active");
});

function checkRepeat() {
  if (
    document.getElementById("profile_password_input").value !==
    document.getElementById("repeat_password_input").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".reset_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".reset_btn").disabled = false;
  }
}

const resetForm = document.querySelector(".profile_section_form");
resetForm.addEventListener("submit", (e) => {
  console.log("test");
  e.preventDefault();
  const warnName = document.querySelector(".profile_name");
  const warnLastName = document.querySelector(".profile_lastName");
  const name = document.querySelector(".profile_firstname_input");
  const LastName = document.querySelector(".profile_lastname_input");
  const passwordInput = document.querySelector("#profile_password_input").value;
  const ResPasswordInput = document.querySelector(
    "#repeat_password_input"
  ).value;
  if (!passwordInput || !ResPasswordInput) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
  } else {
    document.querySelector(".warning_password").innerHTML = null;
  }
  if (name.value.length === 0) {
    console.log("carielia");
    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  }
  if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === false) {
    warnName.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === true) {
    console.log("ara");
    warnName.innerHTML = "";
  }
  if (LastName.value.length === 0) {
    console.log("carielia");
    warnLastName.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  }
  if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === false
  ) {
    warnLastName.innerHTML = "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === true
  ) {
    warnLastName.innerHTML = "";
  }
});
