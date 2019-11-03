



setFontPosition = () => {
  const graphic_font = document.querySelectorAll('.graphic-font');

  graphic_font.forEach(el => {
    const pos_x = parseInt(Math.random() * 100);
    const pos_y = parseInt(Math.random() * 100);
    
    el.style.left = pos_x+"vw";
    el.style.top = pos_y+"vh";
  })

  // moveFontPosition();
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

setVariable = () => {
  var style = document.createElement('style');
  style.type = 'text/css';
  var keyFrames = `\
  @-webkit-keyframes test {\
    0% {\
        -webkit-transform: rotate(A_DYNAMIC_VALUE);\
    }\
  }\
  @-moz-keyframes test {\
    100% {\
        -webkit-transform: rotate(A_DYNAMIC_VALUE);\
    }\
  }\
  @keyframes testanimtaion {\
    0% {\
        opcity: 0;\
    }\
      100% {\
        opcity: 1;\
    }\
  }`;


  style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
  document.getElementsByTagName('head')[0].appendChild(style);


  const test = document.querySelector('.test');
  test.style.animation = 'testanimtaion 1s infinite alternate ease-in-out';
  
	//animation: testanimtaion 1s infinite alternate ease-in-out;
}

init = () =>{
  setFontPosition();
  moveFontPosition();
  setVariable();
}

init();