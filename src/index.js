const dateOfBirth = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#outputH3");

checkBtn.addEventListener("click", checkBirthdateIsLucky);

function checkBirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSumOfBirthdate(dob);
  console.log(sum);
}

function calculateSumOfBirthdate(birthdate) {
  birthdate = birthdate.replaceAll("-", "");
  let sum = 0;
  return birthdate;
}
