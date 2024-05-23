document.addEventListener('DOMContentLoaded', (event) => {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    } else {
        console.error('Menu or Navbar element not found');
    }
});