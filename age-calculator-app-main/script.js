// we want to select output elements
const calculateAge = document.getElementById("calculateAge");
const yearsOld = document.getElementById("yearsOld");
const monthsOld = document.getElementById("monthsOld");
const daysOld = document.getElementById("daysOld");

//input elements
let isValid = false;
const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");

// select error elements
const yearError = document.getElementById("yearError");
const monthError = document.getElementById("monthError");
const dayError = document.getElementById("dayError");
let inputTitle = document.querySelector(".input-title");
let inputError = document.querySelector("input");
let inputErrorFocus = document.querySelector("input:focus");

dayInput.addEventListener("input", (e) => {
  if (+dayInput.value > 31) {
    dayError.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+dayInput.value === 0) {
    isValid = false;
    dayError.textContent = "This field is required";
    isValid = false;

    return;
  } else {
    dayError.textContent = "";
  }
});

dayInput.addEventListener("focus", (e) => {
  if (dayError.textContent !== "") {
    e.target.classList.add("error-input");
  }
});
dayInput.addEventListener("blur", (e) => {
  e.target.classList.remove("error-input");
});

monthInput.addEventListener("input", (e) => {
  if (+monthInput.value > 12) {
    monthError.textContent = "Must be a valid date";
    isValid = false;

    return;
  } else {
    isValid = true;
  }
  if (+monthInput.value === 0) {
    isValid = false;
    monthError.textContent = "This field is required";
    isValid = false;

    return;
  } else {
    monthError.textContent = "";
  }
});

monthInput.addEventListener("focus", (e) => {
  if (monthError.textContent !== "") {
    e.target.classList.add("error-input");
  }
});

monthInput.addEventListener("blur", (e) => {
  e.target.classList.remove("error-input");
});

yearInput.addEventListener("input", (e) => {
  if (+yearInput.value > 2024) {
    yearError.textContent = "Must be in the past!";
    isValid = false;

    return;
  } else {
    isValid = true;
  }
  if (+yearInput.value === 0) {
    isValid = false;
    yearError.textContent = "This field is required";
    isValid = false;

    return;
  } else {
    yearError.textContent = "";
  }
});

yearInput.addEventListener("focus", (e) => {
  if (yearError.textContent !== "") {
    e.target.classList.add("error-input");
  }
});

yearInput.addEventListener("blur", (e) => {
  e.target.classList.remove("error-input");
});

calculateAge.addEventListener("click", calculateDate);

function calculateDate() {
  if (isValid) {
    let dayInput = document.getElementById("dayInput").value;
    let monthInput = document.getElementById("monthInput").value;
    let yearInput = document.getElementById("yearInput").value;

    let birthDate = new Date(yearInput, monthInput - 1, dayInput);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    yearsOld.innerHTML = `<span>${y3}</span>`;
    monthsOld.innerHTML = `<span>${m3}</span>`;
    daysOld.innerHTML = `<span>${d3}</span>`;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}
