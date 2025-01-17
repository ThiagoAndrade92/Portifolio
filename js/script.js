const menu = document.querySelector('.menu');
const navMobile = document.querySelector('.nav-mobile');
const navItens = document.querySelectorAll('.nav-mobile > .nav-itens > li > a');

menu.addEventListener('click', () => {
     menu.classList.toggle('active');
     !menu.classList.contains('active') ? navMobile.classList.remove('active') : navMobile.classList.add('active');
});

navItens.forEach((e) => {
     e.addEventListener('click', () => {
          navMobile.classList.remove('active');
          menu.classList.remove('active')
     });
});