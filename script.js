'use strict';

let menu = document.querySelector('.menu');
let menuOpen = document.querySelector('.header__menu');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    menu.classList.toggle('hidden');
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);