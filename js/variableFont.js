// field
let change_val = [];
let new_val = [];

let interval_wght = null;
let interval_wdth = null;
let interval_ital = null;

let interval = [];

handleFont = (el, i) => {
  console.log('handleFont');
    // handle wght
  
  interval[i].wght = setInterval(() => {
    const start = Date.now();

    new_val[i].wght = parseInt(Math.random()*100);
    const nowVal =  change_val[i].wght;

    let timer_wght = setInterval(() => {
      handleWght(el,i,start, timer_wght, nowVal)
    }, 10);

  }, speed.wght);

  // handle wdth
  interval[i].wdth = setInterval(() => {
    const start = Date.now();
    new_val[i].wdth = parseInt(Math.random()*100);
    const nowVal =  change_val[i].wdth;

    let timer_wdth = setInterval(() => {
      handleWdth(el,i,start, timer_wdth, nowVal);
    }, 10);

  }, speed.wdth);

  // handle ital
  interval[i].ital = setInterval(() => {
    const start = Date.now();
    new_val[i].ital = parseInt(Math.random()*100);
    const nowVal =  change_val[i].ital;

    let timer_ital = setInterval(() => {
      handleItal(el,i,start,timer_ital, nowVal)
    }, 10);
  }, speed.ital);
}


function handleWght(el,i,start, interval, nowval) {
  let timePassed = Date.now() - start;

  if (timePassed >= speed.wght) {
    clearInterval(interval);
    return;
  }

  change_wght(timePassed,el,i,nowval);
}


change_wght = (timePassed,el,i,nowval) => {
  const wght_ease = easeInOut(timePassed, nowval, new_val[i].wght - nowval, speed.wght);
  change_val[i].wght = parseFloat(wght_ease.toFixed(5));

  drawFont(el, change_val[i].wght, change_val[i].wdth, change_val[i].ital);
}


function handleWdth(el,i,timer, interval, nowval) {
  let timePassed = Date.now() - timer;
  if (timePassed >= speed.wdth) {
    clearInterval(interval);
    return;
  }
  // draw the animation at the moment timePassed
  change_wdth(timePassed,el,i, nowval);
}

change_wdth = (timePassed,el,i, nowval) => {
  const wdth = easeInOut(timePassed, nowval, new_val[i].wdth - nowval, speed.wdth);
  change_val[i].wdth = parseFloat(wdth.toFixed(5));

  drawFont(el, change_val[i].wght, change_val[i].wdth, change_val[i].ital);
}

function handleItal(el,i,timer, interval, nowval) {
  let timePassed = Date.now() - timer;
  if (timePassed >= speed.ital) {
    clearInterval(interval);
    return;
  }
  // draw the animation at the moment timePassed
  change_ital(timePassed,el,i, nowval);
}

change_ital = (timePassed,el,i, nowval) => {
  const ital = easeInOut(timePassed, nowval, new_val[i].ital - nowval, speed.ital);
  change_val[i].ital = parseFloat(ital.toFixed(5));

  drawFont(el, change_val[i].wght, change_val[i].wdth, change_val[i].ital);
}

handleVariable = () => {
  console.log('test');
  const graphic = document.querySelectorAll('.graphic');
  graphic.forEach((el, index) => {
    handleFont(el, index);
  })
}

function easeInOut(t, b, c, d) {
//  t: current time/currnet step
//  b: starting position
//  c: amount of change (end - start)
//  d: total animation time/steps
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
}

initVariableFont = () => {
  const graphic_font = document.querySelectorAll('.graphic');
  graphic_font.forEach((el,i) => {

    const temp_pos = {
      "wght": 0,
      "wdth": 0,
      "ital": 0
    }

    const interval_object = {
      "wght": null,
      "wdth": null,
      "ital": null
    }
    const zero = {
      wght: 0,
      wdth: 0,
      ital: 0
    }

    interval.push(interval_object);

    new_val.push(temp_pos);
    change_val.push(zero);

    drawFont(el, change_val[i].wght, change_val[i].wdth, change_val[i].ital);
  });
}

drawFont = (el, wght, wdth, ital) => {
  el.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${ital}`;
}

init = () => {
  initVariableFont();
  handleVariable();
}

clearAllInterval = () => {
  interval.forEach(el => {
    clearInterval(el.wght);
    clearInterval(el.wdth);
    clearInterval(el.ital);
  })
}

init();