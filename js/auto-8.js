// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

function add(a,b,c) {
    const result = a + b + c;
    console.log(`Addition result equals ${result}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);