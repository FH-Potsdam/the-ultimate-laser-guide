const notifier = require('node-notifier');


let args = process.argv;


if (args[2] === 'pandoc') {
  notifier.notify({
    title: 'npm script',
    message: 'build done',
    sound: true
  });

}
