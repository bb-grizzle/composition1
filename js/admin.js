

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
  console.log('-handleChangeValue-');
  console.log(speed);
  const form = document.querySelector('#admin-from');
  console.log(form);
  form.querySelectorAll('input').forEach(el=>{
    console.log(el);
    el.addEventListener('change', ()=> {
      const temp_name = el.name;
      speed[temp_name] = el.value;

      console.dir(interval_wght);
      clearInterval(interval_wght);
      clearInterval(interval_wdth);
      clearInterval(interval_ital);
      
      handleVariable();

    })
  })
  
}

changeFontVariable = () => {
  console.log('-changeFontVariable-');

}


init = () => {
  handleSettingClick();
  handleChangeValue();
}

init();