"use strict";

const hamBtn = document.querySelector('.handburger');

let clicked = true;

hamBtn.addEventListener('click', () => {
    console.log('click')
    const display = document.querySelector(".nav-link");

    
    if (clicked) {
        display.classList.add('hide');
        clicked =false;
    } else {
        display.classList.remove('hide');
        clicked = true;
    }
})
