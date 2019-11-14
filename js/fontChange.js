const char_arr = document.querySelectorAll('.graphic');

changeFontChar = () => {
  console.log('-changeFontChar-');
  const char_arr = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O", "P", "Q","R", "S", "T","U","V","W"];
  const char_show_arr = [];
  const char_count = char_arr.length;
  
  for(let i=0; i< char_count; i++){
    const numb_rand = parseInt(Math.random()*char_arr.length);
    
    if(!sameNum(char_show_arr[numb_rand])){
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
  console.log('test');
  const char_arr_rand = changeFontChar();
  char_arr.forEach((el, index) => {
    el.innerHTML = char_arr_rand[index];
  })
  clearAllInterval();
  handleVariable();
}

handleFontChange = () => {
  setInterval(changeFont, 20000);
}

init = () => {
  handleFontChange();
}

init();
