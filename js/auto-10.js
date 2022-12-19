// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

function makeMessage(name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    console.log(message);
}

makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

