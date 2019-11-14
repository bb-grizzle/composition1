

let interval_temp = setInterval(() => {
  const start = Date.now();

  let seconds = setInterval(() => {
    let timePassed = Date.now() - start;
    if (timePassed >= speed.wght) {
      // console.log('clear');
      clearInterval(seconds);
      return;
    }
  }, 20);


  // console.log('1초');

}, 1000);