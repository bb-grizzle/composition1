// field
let fontPositionArr = [];
let new_val = [];


let interval_wght = null;
let interval_wdth = null;
let interval_ital = null;

let timer = {
  wght: null,
  wdth: null,
  ital: null
}

handleFont = (el, i) => {
  // handle wght
  interval_wght = setInterval(() => {
    console.log('handle wght')
    const start = Date.now();
    new_val[i].wght = parseInt(Math.random()*100);
    const pre = fontPositionArr[i].wght;
    timer.wght = setInterval(() => {handleWght(el,i,start,pre)}, 20);
  }, speed.wght);

  // handle wdth
  interval_wdth = setInterval(() => {
    console.log('handle wdth')
    const start = Date.now();

    new_val[i].wdth = parseInt(Math.random()*100);
    const pre = fontPositionArr[i].wdth;
    timer.wdth = setInterval(() => {handleWdth(el,i,start,pre)}, 20);

  }, speed.wdth);

  // handle ital
  interval_ital = setInterval(() => {
    console.log('handle ital')
    const start = Date.now();

    new_val[i].ital = parseInt(Math.random()*100);
    const pre = fontPositionArr[i].ital;
    timer.ital = setInterval(() => {handleItal(el,i,start,pre)}, 20);
  }, speed.ital);
}


function handleWght(el,i,timer, pre) {
  let timePassed = Date.now() - timer;
  if (timePassed >= speed.wght) {
    clearInterval(timer);
    return;
  }
  // draw the animation at the moment timePassed
  change_wght(timePassed,el,i,pre);
}

function handleWdth(el,i,timer, pre) {
  let timePassed = Date.now() - timer;
  if (timePassed >= speed.wdth) {
    clearInterval(timer);
    return;
  }
  // draw the animation at the moment timePassed
  change_wdth(timePassed,el,i,pre);
}

function handleItal(el,i,timer, pre) {
  let timePassed = Date.now() - timer;
  if (timePassed >= speed.ital) {
    clearInterval(timer);
    return;
  }
  // draw the animation at the moment timePassed
  change_ital(timePassed,el,i,pre);
}


change_wght = (timePassed,el,i,pre) => {

  const wght = easeInOut(timePassed, pre, new_val[i].wght - pre, speed.wght);
  fontPositionArr[i].wght = wght;
  drawFont(el, fontPositionArr[i].wght, fontPositionArr[i].wdth, fontPositionArr[i].ital);
  
}


change_wdth = (timePassed,el,i,pre) => {

  const wdth = easeInOut(timePassed, pre, new_val[i].wdth - pre, speed.wdth);
  fontPositionArr[i].wdth = wdth
  drawFont(el, fontPositionArr[i].wght, fontPositionArr[i].wdth, fontPositionArr[i].ital);
  
}

change_ital = (timePassed,el,i,pre) => {

  const ital = easeInOut(timePassed, pre, new_val[i].ital - pre, speed.ital);
  fontPositionArr[i].ital = ital
  drawFont(el, fontPositionArr[i].wght, fontPositionArr[i].wdth, fontPositionArr[i].ital);
  
}

handleVariable = () => {
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
  graphic_font.forEach(el => {

    const rand_wght = parseInt(Math.random() * 100);
    const rand_wdth = parseInt(Math.random() * 100);
    const rand_ital = parseInt(Math.random() * 100);

    const temp_pos = {
      "wght": rand_wght,
      "wdth": rand_wdth,
      "ital": rand_ital
    }
    const new_val_object = {
      "wght": 0,
      "wdth": 0,
      "ital": 0
    }
    new_val.push(new_val_object);
    fontPositionArr.push(temp_pos);

    drawFont(el, rand_wght, rand_wdth, rand_ital);
  });
}

drawFont = (el, wght, wdth, ital) => {
  el.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${ital}`;
}

init = () => {
  initVariableFont();
  handleVariable();
}

init();