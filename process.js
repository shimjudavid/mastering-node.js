process.on('beforeExit', () => console.log('beforeExit Fired'));
process.on('exit', () => console.log('exit Fired'));
console.log('process started');
let count = 0;
setInterval(function () {
  console.log(`Count: ${count}`);
  count++;
  if (count === 10) {
    console.log('Count reached 10, stopping the counter.');
    clearInterval(this);
  }
}, 2500);
