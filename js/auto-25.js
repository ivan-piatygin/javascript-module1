// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // if (ordered > available) {
  //   message = "Not enough goods in stock!";
  // } else {
  //   message = "The order is accepted, our manager will contact you";
  //
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
