const dateOfBirth = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#outputH3");
const outputDiv = document.querySelector(".result");
const image = document.querySelector("#image");

function checkBirthdateIsLucky(event) {
  event.preventDefault();
  const dob = dateOfBirth.value;
  const sum = calculateSumOfBirthdate(dob);
  compareValues(sum, luckyNumber.value);
}

function calculateSumOfBirthdate(birthdate) {
  birthdate = birthdate.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < birthdate.length; i++) {
    sum += Number(birthdate.charAt(i));
  }
  return sum;
}

function compareValues(birthdateSum, luckyValue) {
  if (birthdateSum % luckyValue === 0) {
    outputDiv.style.display = "block";
    outputText.innerText = "Your birthdate is lucky😎🥳.";
    image.src = "./happy_birthday.svg";
  } else {
    outputDiv.style.display = "block";
    outputText.innerText = "Your is not lucky 🤦‍♂️!..";
    image.src = "./sad_birthdate.svg";
  }
}

checkBtn.addEventListener("click", (e) => checkBirthdateIsLucky(e));
