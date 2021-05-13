// select hamburger elements.
const hamburger = document.querySelector('.nav_hamburger');
const hamburger_top = document.querySelector('.nav_cross-1');
const hamburger_middle = document.querySelector('.nav_opacity-0');
const hamburger_bottom = document.querySelector('.line_cross-2');

// select nav element.
const nav_list = document.querySelector('.nav_list');


hamburger.addEventListener( 'click', () => {

    nav_list.classList.toggle('slide');

    // cross hamburger.
    hamburger_top.classList.toggle('line_top');
    hamburger_middle.classList.toggle('line_middle');
    hamburger_bottom.classList.toggle('line_bottom');


    // hamburger background color onclick.
    hamburger.classList.toggle('bacg');
});