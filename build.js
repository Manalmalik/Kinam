var child = require('child_process');

const base = new Promise(resolve => {
  child.exec('npm run -- ng build nahual-date', () => {
    console.log('nahual-date done');
  });

  child.exec('npm run -- ng build shared', () => {
    console.log('shared done');
  });
  
  child.exec('npm run -- ng build core', () => {
    console.log('core done');
    child.exec('npm run -- ng build ng-maya-number', () => {
      console.log('maya-number done');
      child.exec('npm run -- ng build ng-maya-birthday', () => {
        console.log('birth-date done');
        child.exec('npm run -- ng build website --prod', () => {
          resolve();
          console.log('all done');
          process.exit(0);
        });
      });
    });
  });
});

base.then(() => {
  console.log('done');
});
