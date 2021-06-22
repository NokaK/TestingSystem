const subjectLi = document.querySelectorAll(".my_subject_li");

for (let i = 0; i < subjectLi.length; i++) {
  subjectLi[i].addEventListener("click", () => {
    const profileForm = document.querySelector(".profile_form_container");
    profileForm.classList.add("hidden");
    const middleSections = document.querySelectorAll(".middle_section");

    for (var j = 0; j < middleSections.length; j++) {
      if (middleSections[i].classList.contains(`middle_section${j}`)) {
        document
          .querySelector(`.middle_section${j}`)
          .classList.remove("hidden");
        document
          .querySelector(`.middle_section${j}`)
          .classList.add("middle_section_active");
      } else {
        document.querySelector(`.middle_section${j}`).classList.add("hidden");
        document
          .querySelector(`.middle_section${j}`)
          .classList.remove("middle_section_active");
      }
    }
  });
}

const students = document.querySelectorAll(".students");
const tests = document.querySelectorAll(".tests");
const teachers = document.querySelectorAll(".teachers");
const testsSection = document.querySelector(".tests_section");
const studentsSection = document.querySelector(".students_section");
const teachersSection = document.querySelector(".teachers_section");

const remove = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
};

for (var i = 0; i < students.length; i++) {
  students[i].addEventListener("click", () => {
    let activeSection = document.querySelector(".middle_section_active");
    activeSection.querySelector(".students_section").classList.remove("hidden");
    activeSection.querySelector(".tests_section").classList.add("hidden");
    activeSection.querySelector(".tests").classList.remove("active");
    activeSection.querySelector(".teachers").classList.remove("active");
    activeSection.querySelector(".students").classList.add("active");

    activeSection.querySelector(".teachers_section").classList.add("hidden");
  });
}

for (var i = 0; i < teachers.length; i++) {
  teachers[i].addEventListener("click", () => {
    let activeSection = document.querySelector(".middle_section_active");
    const tests = activeSection.querySelector(".tests");
    const students = activeSection.querySelector(".students");
    remove(tests);
    remove(students);
    // activeSection.document.querySelector(".students_section").add("hidden");

    activeSection.querySelector(".tests_section").classList.add("hidden");
    activeSection.querySelector(".students_section").classList.add("hidden");
    activeSection.querySelector(".teachers_section").classList.remove("hidden");
    activeSection.querySelector(".teachers").classList.add("active");
  });
}

for (var i = 0; i < tests.length; i++) {
  tests[i].addEventListener("click", () => {
    let activeSection = document.querySelector(".middle_section_active");
    console.log("test");
    activeSection.querySelector(".students_section").classList.add("hidden");
    activeSection.querySelector(".tests").classList.add("active");
    // activeSection.querySelector();
    // studentsSection.classList.add("hidden");
    activeSection.querySelector(".tests_section").classList.remove("hidden");

    activeSection.querySelector(".teachers_section").classList.add("hidden");
    remove(activeSection.querySelector(".teachers"));
    remove(activeSection.querySelector(".students"));
  });
}

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
const titl2 = document.querySelectorAll(".title2");
const titl1 = document.querySelectorAll(".title1");
const titl3 = document.querySelectorAll(".title3");
const form = document.querySelector(".students__form");

for (var i = 0; i < titl2.length; i++) {
  titl2[i].addEventListener("click", () => {
    console.log("test");
    let activeSection = document.querySelector(".middle_section_active");
    const class1 = activeSection.querySelector(".class1");
    const class2 = activeSection.querySelector(".class2");
    const class3 = activeSection.querySelector(".class3");
    const form = activeSection.querySelector(".students__form");
    const class2form = activeSection.querySelector(".class2__form");
    class1.classList.remove("active_class");
    class2.classList.add("active_class");

    class2form.appendChild(form);
  });
}

for (var i = 0; i < titl1.length; i++) {
  titl1[i].addEventListener("click", () => {
    let activeSection = document.querySelector(".middle_section_active");
    const class1 = activeSection.querySelector(".class1");
    const class2 = activeSection.querySelector(".class2");
    const class3 = activeSection.querySelector(".class3");
    const form = activeSection.querySelector(".students__form");
    const class1form = activeSection.querySelector(".class1_form");
    class2.classList.remove("active_class");
    class1.classList.add("active_class");
    class1form.appendChild(form);
  });
}

for (var i = 0; i < titl3.length; i++) {
  titl3[i].addEventListener("click", () => {
    let activeSection = document.querySelector(".middle_section_active");
    const class1 = activeSection.querySelector(".class1");
    const class2 = activeSection.querySelector(".class2");
    const class3 = activeSection.querySelector(".class3");
    const class3form = activeSection.querySelector(".class3_form");
    const form = activeSection.querySelector(".students__form");
    class3.classList.add("active_class");
    class2.classList.remove("active_class");
    class1.classList.remove("active_class");
    class3form.appendChild(form);
  });
}

// titl3.addEventListener("click", () => {
//   let activeSection = document.querySelector(".middle_section_active");
//   const class1 = activeSection.querySelector(".class1");
//   const class2 = activeSection.querySelector(".class2");
//   const class3 = activeSection.querySelector(".class3");
//   const class3form = activeSection.querySelector(".class3_form");
//   class3.classList.add("active_class");
//   class2.classList.remove("active_class");
//   class1.classList.remove("active_class");
//   class3form.appendChild(form);
// });

// ADD STUDENTS

const AddStudentBtn = document.querySelectorAll(".add_student");

for (var i = 0; i < AddStudentBtn.length; i++) {
  AddStudentBtn[i].addEventListener("click", (e) => {
    let activeSection = document.querySelector(".middle_section_active");

    const StudentName = activeSection.querySelector(".students_name_input");
    const StudentLastName = activeSection.querySelector(
      ".students_lastname_input"
    );
    const NameError = activeSection.querySelector(".name_error");
    const LastNameError = activeSection.querySelector(".lastName_error");

    e.preventDefault();
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
      LastNameError.innerHTML =
        "გვარი არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
    } else if (
      StudentLastName.value.length > 0 &&
      /\p{Letter}/u.test(LastNameError.value) === true
    ) {
      LastNameError.innerHTML = "";
      validateLastName = true;
    }
    if (validateLastName && validateName) {
      const activeClass = activeSection.querySelector(".active_class");
      const ActiveUl = activeClass.querySelector(".students_ul");
      const li = document.createElement("li");
      console.log(activeClass);
      console.log(ActiveUl);
      console.log(li);
      li.appendChild(
        document.createTextNode(StudentName.value + " " + StudentLastName.value)
      );
      ActiveUl.appendChild(li);
      StudentName.value = "";
      StudentLastName.value = "";
    }
  });
}

const addTest = document.querySelectorAll(".add_test");
for (var i = 0; i < addTest.length; i++) {
  addTest[i].addEventListener("click", (e) => {
    let activeSection = document.querySelector(".middle_section_active");

    const testUl = activeSection.querySelector(".tests_ul");
    const questionIput = activeSection.querySelector(".tests_question_input");
    const answerIput = activeSection.querySelector(".tests_answer_input");
    const subjectLi = document.querySelectorAll(".my_subject_li");
    e.preventDefault();
    const answerText = answerIput.value;
    const questionText = questionIput.value;
    console.log(answerText);
    console.log(questionText);
    if (answerText.trim().length === 0) {
      activeSection.querySelector(".answer_error ").innerHTML =
        "გთხოვთ შეიყვანოთ პასუხი";
    } else {
      activeSection.querySelector(".answer_error ").innerHTML = "";
    }
    if (questionText.trim().length === 0) {
      activeSection.querySelector(".question_error ").innerHTML =
        "გთხოვთ შეიყვანოთ კითხვა";
    } else {
      activeSection.querySelector(".question_error ").innerHTML = "";
    }
    if (questionText.trim().length && answerText.trim().length) {
      console.log(activeSection);
      const li = document.createElement("li");
      li.classList.add("tests_li");
      const title = document.createElement("h4");
      title.classList.add("test_title");
      const question = document.createElement("p");
      question.classList.add("question");
      const answer = document.createElement("p");
      answer.classList.add("answer");
      const testLi = activeSection.querySelectorAll(".tests_li");
      const titleText = document.createTextNode(`ტესტი ${testLi.length + 1}`);

      li.appendChild(title);

      const answerNode = document.createTextNode(answerText);
      const questionNode = document.createTextNode(questionText);

      question.appendChild(questionNode);
      answer.appendChild(answerNode);

      li.appendChild(question);
      li.appendChild(answer);

      title.appendChild(titleText);
      testUl.appendChild(li);
      answerIput.value = "";
      questionIput.value = "";
      activeSection.querySelector(".question_error ").innerHTML = "";
      activeSection.querySelector(".answer_error ").innerHTML = "";
    }
  });
}

console.log(sessionStorage);

let profileName = sessionStorage.getItem("name");
let profileSurname = sessionStorage.getItem("surname");
let profileEmail = sessionStorage.getItem("email");

document.getElementById("profileName").innerHTML =
  profileName + " " + profileSurname;
document.getElementById("profileEmail").value = profileEmail;

// add teachers

const addTeacher = document.querySelectorAll(".add_teacher");
for (var i = 0; i < addTeacher.length; i++) {
  addTeacher[i].addEventListener("click", (e) => {
    let activeSection = document.querySelector(".middle_section_active");

    const teacherName = activeSection.querySelector(".teachers_name_input");
    const teacherLastame = activeSection.querySelector(
      ".teachers_lastname_input"
    );
    const teacherNameError = activeSection.querySelector(".teacher_name_error");
    const teacherLastameError = activeSection.querySelector(
      ".teacher_lastname_error"
    );
    e.preventDefault();
    let validateName = false;
    let validateLastName = false;
    if (teacherName.value.trim().length == 0) {
      console.log("test");
      teacherNameError.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
    } else if (
      teacherName.value.trim().length !== 0 &&
      (!/\p{L}/u.test(teacherName.value) || /\d/.test(teacherName.value))
    ) {
      teacherNameError.innerHTML =
        "სახელი არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";
    } else {
      teacherNameError.innerHTML = "";
      validateName = true;
    }

    if (teacherLastame.value.trim().length == 0) {
      teacherLastameError.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
    } else if (
      teacherLastame.value.trim().length !== 0 &&
      (!/\p{L}/u.test(teacherLastame.value) || /\d/.test(teacherLastame.value))
    ) {
      teacherLastameError.innerHTML =
        "გვარი არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";
    } else {
      teacherLastameError.innerHTML = "";
      validateLastName = true;
    }
    if (validateLastName && validateName) {
      const li = document.createElement("li");
      const teachersUl = activeSection.querySelector(".teachers_ul");

      li.appendChild(
        document.createTextNode(`${teacherName.value} ${teacherLastame.value}`)
      );

      teachersUl.appendChild(li);
      teacherName.value = "";
      teacherLastame.value = "";
    }
  });
}
