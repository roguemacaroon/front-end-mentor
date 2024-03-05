//--------------------------------------------
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

calculateAge.addEventListener("click", calculateDate);

function calculateDate() {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    daysOld.textContent = ageDay;
    monthsOld.textContent = ageMonth;
    yearsOld.textContent = ageYears;
  } else {
    alert("error");
  }
}
