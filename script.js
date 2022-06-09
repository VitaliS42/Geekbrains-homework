'use strict';

let menuDark = document.querySelector('.menu__darken');
let headerButton = document.querySelector('.header__button');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    menuDark.classList.toggle('hidden');
}

headerButton.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);