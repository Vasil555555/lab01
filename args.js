// Виведення всіх аргументів
console.log('Всі аргументи:', process.argv);

// Отримуємо аргументи, які передає користувач (з третього елемента)
const userArgs = process.argv.slice(2);
console.log('Аргументи користувача:', userArgs);

// Наприклад, обробка введеного імені
if (userArgs.length > 0) {
  console.log(`Привіт, ${userArgs[0]}!`);
} else {
  console.log('Будь ласка, введіть своє ім’я як аргумент.');
}
