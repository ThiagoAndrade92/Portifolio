const menu = document.querySelector('.menu');
const navMobile = document.querySelector('.nav-mobile');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
   !menu.classList.contains('active') ? navMobile.classList.remove('active') : navMobile.classList.add('active');
});

navMobile.addEventListener('click', () => {
     navMobile.classList.remove('active');
     menu.classList.remove('active')
});
