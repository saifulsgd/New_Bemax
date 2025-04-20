let menu=document.querySelector('.checkbtn');

 menu.addEventListener('click',()=>{
    let popup=document.querySelector('.popup');
    popup.classList.toggle('active');
 });


 const topbar=document.querySelector('.topbar');

 window.addEventListener('scroll',()=>{
     if(window.pageYOffset > 100){
      topbar.classList.add('xyz');
     }else{
      topbar.classList.remove('xyz');
     }
 });