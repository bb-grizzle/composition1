let speed = {
  "wght" : 3000,
  "wdth" : 3000,
  "ital" : 3000,
  "char" : 10000
};

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

init = () => {
  initFontPosition();
  moveFontPosition();
}

init();

