//carousel slide transitions

const buttonPrevious = document.getElementById
('carousel-button-previous');

const buttonNext = document.getElementById
('carousel-button-next');

const carouselContainer = document.getElementById
('carousel-container');

const slidesContainer = document.getElementById
('carousel-slides-container');

let currentSlide = 0;
const numSlides = slidesContainer.children.length;

function handleNext() {
    currentSlide = (currentSlide + 1) % numSlides;
    carouselContainer.style.setProperty('--current-slide', currentSlide);
}

buttonNext.addEventListener('click', handleNext);

function handlePrevious() {
    currentSlide = (currentSlide - 1) % numSlides;
    if(currentSlide < 0){
        currentSlide += numSlides;
    }
    carouselContainer.style.setProperty('--current-slide', currentSlide);
}

buttonPrevious.addEventListener('click', handlePrevious);

//end carousel js
