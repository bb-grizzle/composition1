let fontPositionArr = [];

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
  },10000)
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
  graphic.forEach((el, index) => {
    const rand_wght = parseInt(Math.random() * 100);
    fontPositionArr[index].wght = rand_wght;
    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;
  })
}

changeWdth = () => {
  console.log('-changeWdth-');

  const graphic = document.querySelectorAll('.graphic');
  graphic.forEach((el, index) => {

    const rand_wdth = parseInt(Math.random() * 100);
    fontPositionArr[index].wdth = rand_wdth;
    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;

  });
}

changeItal = () => {
  console.log('-changeItal-');
  const graphic = document.querySelectorAll('.graphic');

  graphic.forEach((el, index) => {

    const rand_ital = parseInt(Math.random() * 100);
    fontPositionArr[index].ital = rand_ital;
    el.style.fontVariationSettings = `'wght' ${fontPositionArr[index].wght}, 'wdth' ${fontPositionArr[index].wdth}, 'ital' ${fontPositionArr[index].ital}`;

  });
}

changeFontVariable = () => {

  setInterval(()=>{
    changeWght();
  }, 3000);

  setInterval(()=>{
    changeWdth();
  }, 6000);

  setInterval(()=>{
    changeItal();
  }, 9000);
}

init = () =>{
  initFontPosition();
  moveFontPosition();
  initVariableFont();
  changeFontVariable();
}

init();