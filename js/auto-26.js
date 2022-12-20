// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : (message = "Access denied, wrong password!");

  console.log(message);
}

checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");
