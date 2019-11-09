let fontPositionArr = [];
let speed = {
  "wght" : 3000,
  "wdth" : 3000,
  "ital" : 3000,
  "char" : 10000
};

let interval_wght;
let interval_wdth;
let interval_ital;
let interval_char;


initFontPosition = () => {
  const graphic_font = document.querySelectorAll('.graphic-font');

  graphic_font.forEach(el => {
    const pos_x = parseInt(Math.random() * 100);
    const pos_y = parseInt(Math.random() * 100);
    
    el.style.left = pos_x+"vw";
    el.style.top = pos_y+"vh";
  })
}

moveFontPosition = () => {
  const graphic_font = document.querySelectorAll('.graphic-font');

  graphic_font.forEach(el => {
    el.classList.add('graphic-font-transition');
  })

  setInterval(()=>{
    graphic_font.forEach(el => {
      const pos_x = parseInt(Math.random() * 90);
      const pos_y = parseInt(Math.random() * 90);
      
      el.style.left = pos_x+"vw";
      el.style.top = pos_y+"vh";
    })
  },speed.char)
}

initVariableFont = () => {
  console.log('-initVariableFont-')
  
  const graphic_font = document.querySelectorAll('.graphic');
  graphic_font.forEach(el => {

    const rand_wght = parseInt(Math.random() * 100);
    const rand_wdth = parseInt(Math.random() * 100);
    const rand_ital = parseInt(Math.random() * 100);

    const temp_pos = {"wght": rand_wght, "wdth": rand_wdth,"ital":rand_ital }
    fontPositionArr.push(temp_pos);

    el.style.fontVariationSettings = `'wght' ${rand_wght}, 'wdth' ${rand_wdth}, 'ital' ${rand_ital}`;
  });
}

changeWght = () =>{
  console.log('-changeWght-');
  const graphic = document.querySelectorAll('.graphic');
  
  const duration = parseInt(speed.wght/1000) + 's';
  graphic.forEach((el, index) => {
    el.style.transitionDuration = duration;
    const rand_wght = parseInt(Math.random() * 100);
    fontPositionArr[index].wght = rand_wght;

    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;
  })
}

changeWdth = () => {
  // console.log('-changeWdth-');
  const graphic = document.querySelectorAll('.graphic');

  const duration = parseInt(speed.wdth/1000) + 's';
  graphic.forEach((el, index) => {

    el.style.transitionDuration = duration;
    const rand_wdth = parseInt(Math.random() * 100);
    fontPositionArr[index].wdth = rand_wdth;
    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;

  });
}

changeItal = () => {
  // console.log('-changeItal-');
  const graphic = document.querySelectorAll('.graphic');

  const duration = parseInt(speed.ital/1000) + 's';

  graphic.forEach((el, index) => {

    el.style.transitionDuration = duration;
    const rand_ital = parseInt(Math.random() * 100);
    fontPositionArr[index].ital = rand_ital;
    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;
  });
}

changeFontVariable = () => {
  clearInterval(interval_wght);
  clearInterval(interval_wdth);
  clearInterval(interval_ital);
  
  interval_wght = setInterval(()=>{
    changeWght();
  }, speed.wght);

  interval_wdth = setInterval(()=>{
    changeWdth();
  }, speed.wdth);

  interval_ital = setInterval(()=>{
    changeItal();
  }, speed.ital);
}

changeFontChar = () => {
  console.log('-changeFontChar-');
  const char_arr = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O", "P", "Q","R", "S", "T","U","V","W"];
  const char_show_arr = [];
  const char_count = 7;
  
  for(let i=0; i< char_count; i++){
    const numb_rand = parseInt(Math.random()*char_arr.length);
    if(!sameNum(numb_rand)){
      char_show_arr.push(char_arr[numb_rand]);
    }else{
      i--;
    }
  }

  return char_show_arr;

  function sameNum(n) {
    for (var i = 0; i < char_show_arr.length; i++) {
      if (n === char_show_arr[i]) {
        return true;
        }
      }
    return false;
  }
}

changeFont = () => {
  const char_arr = document.querySelectorAll('.graphic');
  const char_arr_rand = changeFontChar();
  char_arr.forEach((el, index) => {
    el.innerHTML = char_arr_rand[index];
  })
}

handleFont = () => {
  setInterval(changeFont, 10000);
}

handleAdmin = () => {
  handleSettingClick();
}

handleSettingClick = () => {
  const setting = document.querySelector('.ic_setting');
  const close = document.querySelector('.ic_close');
  
  const admin = document.querySelector('.admin');
  
  setting.addEventListener('click', ()=>{
    admin.classList.toggle('admin_show');
  })
  close.addEventListener('click', ()=>{
    admin.classList.toggle('admin_show');
  })
}

handleChangeValue = () => {
  const form = document.querySelector('#admin-from');
  form.wght.addEventListener('change', (e)=>{
    speed[e.target.name] = e.target.value*1;
    changeFontVariable();
  })
}

init = () =>{
  handleAdmin();
  handleChangeValue();

  initFontPosition();
  moveFontPosition();
  initVariableFont();
  changeFontVariable();
  handleFont();
}

init();