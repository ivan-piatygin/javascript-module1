// Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity * pricePerItem;
    console.log(totalPrice);
}

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);

