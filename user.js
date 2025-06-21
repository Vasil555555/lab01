const fs = require('fs');
const path = 'user.json';

// Читаємо дані з файлу
const loadUser = () => {
  try {
    const dataBuffer = fs.readFileSync(path);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return { firstName: 'Василь', lastName: 'Літвінов', languages: [] };
  }
};

// Записуємо дані у файл
const saveUser = (user) => {
  fs.writeFileSync(path, JSON.stringify(user, null, 2));
};

// Додаємо мову з валідацією
const addLanguage = (title, level) => {
  const user = loadUser();
  const duplicate = user.languages.find(lang => lang.title.toLowerCase() === title.toLowerCase());
  if (duplicate) {
    console.log(`Мова "${title}" вже існує.`);
    return;
  }
  user.languages.push({ title, level });
  saveUser(user);
  console.log(`Мову "${title}" додано.`);
};

// Видаляємо мову
const removeLanguage = (title) => {
  const user = loadUser();
  const filtered = user.languages.filter(lang => lang.title.toLowerCase() !== title.toLowerCase());
  if (filtered.length === user.languages.length) {
    console.log(`Мова "${title}" не знайдена.`);
    return;
  }
  user.languages = filtered;
  saveUser(user);
  console.log(`Мову "${title}" видалено.`);
};

// Список усіх мов
const listLanguages = () => {
  const user = loadUser();
  if (user.languages.length === 0) {
    console.log('Мови не додані.');
    return;
  }
  console.log('Мови користувача:');
  user.languages.forEach(lang => {
    console.log(`- ${lang.title}: ${lang.level}`);
  });
};

// Читаємо конкретну мову
const readLanguage = (title) => {
  const user = loadUser();
  const lang = user.languages.find(lang => lang.title.toLowerCase() === title.toLowerCase());
  if (!lang) {
    console.log(`Мова "${title}" не знайдена.`);
    return;
  }
  console.log(`Інформація про мову "${title}":`);
  console.log(`Рівень: ${lang.level}`);
};

module.exports = {
  addLanguage,
  removeLanguage,
  listLanguages,
  readLanguage
};
