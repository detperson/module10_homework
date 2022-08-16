let a = prompt("Введите число");
let b = +a;
console.log("Принадлежит к множеству: " + typeof b);
let c = b % 2;
let d = isNaN(b);

if (c == 0) {
  console.log(b + " четное число");
} else if (c === 1) {
  console.log(b + " не четное число");
} else {
  console.log("Упс, кажется, вы ошиблись");
}

if (d === false) {
  console.log(a + " - число");
} else {
  console.log(a + " - не число");
}