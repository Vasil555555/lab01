const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'task02.txt');
const newLine = 'Hello, World!\n';

fs.appendFile(filePath, newLine, (err) => {
  if (err) {
    console.error('Помилка при записі:', err);
  } else {
    console.log('Рядок додано в task02.txt');
  }
});
