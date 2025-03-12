let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');  // Select all images
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    // Loop around the slides if it exceeds bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const newTransformValue = -currentSlide * 100;  // Slide by 100% of the container width
    document.querySelector('.slider-images').style.transform = `translateX(${newTransformValue}%)`;
}
