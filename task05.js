const fs = require('fs');

// Зчитуємо JSON-файл
const data = fs.readFileSync('user.json', 'utf8');

// Парсимо JSON в об'єкт
const user = JSON.parse(data);

// Виводимо інформацію
console.log(`Ім’я: ${user.firstName} ${user.lastName}`);
console.log('Мови програмування:');
user.languages.forEach(lang => {
  console.log(`- ${lang.title}: ${lang.level}`);
});
