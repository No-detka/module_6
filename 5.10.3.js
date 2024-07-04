let userName = prompt("Введите ваше имя");
userName = userName.replace(userName[0], userName[0].toUpperCase());
let yearOfBirth = prompt("Введите ваш год рождения");
+yearOfBirth;

let currentYear = new Date().getFullYear();
alert(`${userName}: ${currentYear - yearOfBirth}`);
