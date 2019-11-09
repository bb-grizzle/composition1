

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
  console.log(form);
  const variableForm = form.querySelector('.variable');
  variableForm.querySelectorAll('input').forEach(el=>{
    el.addEventListener('change', ()=> {
      const temp_name = el.name;
      speed[temp_name] = el.value;

      interval.forEach(el => {
        clearInterval(el.wght);
        clearInterval(el.wdth);
        clearInterval(el.ital);
      })
      handleVariable();
    })
  })
  
}

handleChangeMove = () => {
  const form = document.querySelector('#admin-from');
  const target = form.fontSize;
  target.addEventListener('change', ()=>{
    console.log('test');
    console.log(target.value);
    const graphic = document.querySelectorAll('.graphic');

    console.log(graphic);
    graphic.forEach(el=>{
      el.style.fontSize = target.value + "rem";
    })
  })
}


init = () => {
  handleSettingClick();
  handleChangeValue();
  handleChangeMove();
}

init();