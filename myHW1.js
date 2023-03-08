// Домашня робота:
// 1)Створити калькулятор знижок, отримати від користувача ціну товара і в консоль вивести інформацію про знижку при покупці 10 товарів ( знижка 3%) 
// інформацію при покупці 20 товарів ( знижка 5%)

var price = prompt ('Вкажіть ціну товару: ' + 'грн');

console.log(price);

var discount3 = 10 * 0.03;
var price3 = parseFloat(price) * discount3;

alert('Ціна за покупку 10 товарів, знижка 3%' + ' - ' + price3 + ' грн');
console.log(price3);

var discount5 = 20 * 0.05;
var price5 = parseInt(price) * discount5;

alert('Ціна за покупку 20 товарів, знижка 5%' + ' - ' + price5 + ' грн');
console.log(price5);

// 2) Отримати від користувача розміри сторін прямокутника і вивести в консоль значення площі прямокутника ( це математична формула одна сторона * на іншу сторону)

let width = prompt ('Вкажіть ширину прямокутника: ' + ' см');
console.log(width);

let height = prompt ('Вкажіть висоту прямокутника: ' + ' см');
console.log(height);

let rectangleS = parseInt(width) * parseInt(height);
alert(rectangleS + ' см площа прямокутника;');
console.log(rectangleS);


// 3) Самостійно порівняти за допомогою == і ===  різні типи данних і розглянути результат

// ==
let myAge1 = '30';
let myAge2 = 30;

console.log(myAge1 == myAge2); 
// true

var myType1 = 'One hundred';
var myType2 = 100;

console.log(myType1 == myType2);
// false

const myHome1 = 'Kiev';
const myHome2 = 'Ukraine';

console.log(myHome1 == myHome2);
// false

let myTrip1 = 25;
let myTrip2 = 25;

console.log(myTrip1 == myTrip2);
// true


// ===
let myAge3 = '10';
let myAge4 = 10;

console.log(myAge3 === myAge4);
// false

var myType3 = 'Ten';
var myType4 = 10;

console.log(myType3 === myType4);
// false

const myHome3 = 'Lviv';
const myHome4 = 'Ukraine';

console.log(myHome3 === myHome4);
// false

let myTrip3 = 50;
let myTrip4 = 50;

console.log(myTrip3 === myTrip4);
// true