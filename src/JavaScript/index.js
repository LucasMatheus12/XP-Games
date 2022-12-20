const menu = document.querySelector('.menu-responsive'); 

 const navigationMenu = document.querySelector('.navigation')

 
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navigationMenu.classList.toggle('ativo');

});