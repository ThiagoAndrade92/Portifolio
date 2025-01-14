const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelector('.nav-mobile').classList.toggle('active')
})