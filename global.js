let count = 0;

const counter = () => {
  setInterval(function () {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
      console.log('Count reached 5, stopping the counter.');
      clearInterval(this);
    }
  }, 3000);
};
counter();
