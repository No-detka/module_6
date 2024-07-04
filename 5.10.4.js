let userName = prompt("Введите ваше имя");
userName = userName.replace(userName[0], userName[0].toUpperCase());

let yearOfBirth = prompt("Введите ваш год рождения");
+yearOfBirth;

let currentYear = new Date().getFullYear();
let currentAge = currentYear - yearOfBirth;

let lastDigit = currentAge % 10;
if (lastDigit == 1) {
  alert(`${userName}: ${currentAge} год`);
} else if (lastDigit >= 2 && lastDigit <= 4) {
  alert(`${userName}: ${currentAge} года`);
} else {
  alert(`${userName}: ${currentAge} лет`);
}