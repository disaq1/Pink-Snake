toggleBurger = function() {
    const burger = document.getElementById('burger');
    burger.classList.toggle('btnToggle')

    const burger_menu = document.getElementById('burger_menu__wrapper')
    burger_menu.classList.toggle('burger_menu__wrapper--open')

    document.body.classList.toggle('_lock');
}