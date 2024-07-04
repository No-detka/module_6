let userPromo = prompt('Введите промокод');
let actionPromo = 'скидка';
if (userPromo.toLowerCase() == actionPromo) {
    alert(`Промокод применен`);
}
else {
    alert(`Промокод не работает`);
}