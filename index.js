const _ = require('lodash');

// 1. _.chunk — розбиває масив на менші частини
const array = [1, 2, 3, 4, 5, 6];
console.log('_.chunk:', _.chunk(array, 2)); // [[1,2],[3,4],[5,6]]

// 2. _.uniq — прибирає дублікати
const duplicates = [1, 2, 2, 3, 4, 4, 5];
console.log('_.uniq:', _.uniq(duplicates)); // [1,2,3,4,5]

// 3. _.camelCase — перетворює рядок у camelCase
console.log('_.camelCase:', _.camelCase('Hello world example')); // helloWorldExample

// 4. _.shuffle — перемішує елементи масиву
console.log('_.shuffle:', _.shuffle(array)); // Наприклад [3,1,6,2,4,5]

// 5. _.random — генерує випадкове число в межах
console.log('_.random:', _.random(1, 10)); // Наприклад 7
