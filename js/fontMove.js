

let interval_move = null;

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

  interval_move = setInterval(()=>{
    console.log('move');
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

