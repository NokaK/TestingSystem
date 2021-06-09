const subjectLi = document.getElementsByClassName("my_subject_li");
for (var i = 0; i < subjectLi.length; i++) {
  subjectLi[i].addEventListener("click", () => {
    const profileForm = document.querySelector(".profile_form_container");
    profileForm.classList.add("hidden");
    document.querySelector(".middle_section").classList.remove("hidden");
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

// RESET VALIDATION
const resetForm = document.querySelector(".profile_section_form");
resetForm.addEventListener("submit", (e) => {
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

    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  }
  if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === false) {
    warnName.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === true) {
    warnName.innerHTML = "";
  }
  if (LastName.value.length === 0) {
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

// toggle add students form
const titl2 = document.querySelector(".title2");
const titl1 = document.querySelector(".title1");
const titl3 = document.querySelector(".title3");
const form = document.querySelector(".students__form");
const class1 = document.querySelector(".class1");
const class2 = document.querySelector(".class2");
const class3 = document.querySelector(".class3");

titl2.addEventListener("click", () => {
  const class2form = document.querySelector(".class2__form");
  class1.classList.remove("active_class");
  class2.classList.add("active_class");

  class2form.appendChild(form);
});
titl1.addEventListener("click", () => {
  const class1form = document.querySelector(".class1_form");
  class2.classList.remove("active_class");
  class1.classList.add("active_class");
  class1form.appendChild(form);
});
titl3.addEventListener("click", () => {
  const class3form = document.querySelector(".class3_form");
  class3.classList.add("active_class");
  class2.classList.remove("active_class");
  class1.classList.remove("active_class");
  class3form.appendChild(form);
});

// ADD STUDENTS
const StudentName = document.querySelector(".students_name_input");
const StudentLastName = document.querySelector(".students_lastname_input");
const NameError = document.querySelector(".name_error");
const LastNameError = document.querySelector(".lastName_error");

const AddStudentBtn = document.querySelector(".add_student");
AddStudentBtn.addEventListener("click", () => {
  let validateName = false;
  let validateLastName = false;

  if (StudentName.value.length === 0) {
    NameError.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === false
  ) {
    NameError.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === true
  ) {
    NameError.innerHTML = "";
    validateName = true;
  }

  if (StudentLastName.value.length === 0) {
    LastNameError.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(StudentLastName.value) === false
  ) {
    LastNameError.innerHTML = "გვარი არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(LastNameError.value) === true
  ) {
    LastNameError.innerHTML = "";
    validateLastName = true;
  }
  if (validateLastName && validateName) {
    const activeClass = document.querySelector(".active_class");
    const ActiveUl = activeClass.querySelector(".students_ul");
    const li = document.createElement("li");

    li.appendChild(
      document.createTextNode(StudentName.value + " " + StudentLastName.value)
    );
    ActiveUl.appendChild(li);
    StudentName.value = "";
    StudentLastName.value = "";
  }
});

console.log(sessionStorage);

let profileName = sessionStorage.getItem('name');
let profileSurname = sessionStorage.getItem('surname');
let profileEmail = sessionStorage.getItem('email');

document.getElementById("profileName").innerHTML = profileName + " " + profileSurname;
document.getElementById("profileEmail").value = profileEmail;