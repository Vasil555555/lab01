const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const user = require('./user');

const argv = yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Додати мову',
    builder: {
      title: {
        describe: 'Назва мови',
        demandOption: true,
        type: 'string',
      },
      level: {
        describe: 'Рівень знання',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (!argv.title.trim() || !argv.level.trim()) {
        console.log('Помилка: назва та рівень не можуть бути пустими.');
        return;
      }
      user.addLanguage(argv.title, argv.level);
    },
  })
  .command({
    command: 'remove',
    describe: 'Видалити мову',
    builder: {
      title: {
        describe: 'Назва мови',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (!argv.title.trim()) {
        console.log('Помилка: назва не може бути пустою.');
        return;
      }
      user.removeLanguage(argv.title);
    },
  })
  .command({
    command: 'list',
    describe: 'Показати всі мови',
    handler() {
      user.listLanguages();
    },
  })
  .command({
    command: 'read',
    describe: 'Показати мову за назвою',
    builder: {
      title: {
        describe: 'Назва мови',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (!argv.title.trim()) {
        console.log('Помилка: назва не може бути пустою.');
        return;
      }
      user.readLanguage(argv.title);
    },
  })
  .help()
  .argv;
