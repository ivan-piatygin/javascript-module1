// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip";
    return canAccessContent;
}

console.log (checkIfCanAccessContent("pro"));
console.log (checkIfCanAccessContent("starter"));
console.log (checkIfCanAccessContent("vip"));
console.log (checkIfCanAccessContent("free"));
