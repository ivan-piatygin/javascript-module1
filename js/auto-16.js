// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   console.log(message);
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

function checkStorage(available, ordered) {
    let message;
    if (ordered > available) {
            message = "Not enough goods in stock!";
          } else {
            message = "Not enough goods in stock!";
          }
    return message;
}

console.log(checkStorage(100, 50));



