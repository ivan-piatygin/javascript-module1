// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

function checkAge (age) {
    if (age >= 18) {
        message = "You are adult";
    } else {
        message = "You are minor";
    }
    console.log(message);
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);