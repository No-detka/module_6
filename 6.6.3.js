let anyNumber = prompt("Введите любое число");

if (Number.isNaN(anyNumber)) {
  alert("Вы ввели не число. Попробуйте еще раз");
} else {
  alert("Вы ввели число");
  +anyNumber;
}

let arr = [];

for (i = 0; i <= anyNumber; i++) {
  arr.push(i);
}

alert(arr);