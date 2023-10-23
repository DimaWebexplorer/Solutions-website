'use strict';
let offset = 0;
const sliderElements = document.querySelector('.cards-slider__cards');
const buttonNext = document.querySelector('.cards-slider__btn-next');
const buttonPrevious = document.querySelector('.cards-slider__btn-previous');

const nextSlide = () => {
    buttonPrevious.style.opacity = '1';
    offset -= 39;
    if(offset <= -117) {
        buttonNext.style.opacity = '.3';
        offset = -117;
    }
    sliderElements.style.left = offset + 'rem';
};

const previousSlide = () => {
    buttonNext.style.opacity = '1';
    offset += 39;
    if(offset >= 0) {
        buttonPrevious.style.opacity = '.3';
        offset = 0;
    }
    sliderElements.style.left = offset + 'rem';
};

buttonNext.addEventListener('click', nextSlide);
buttonPrevious.addEventListener('click', previousSlide);