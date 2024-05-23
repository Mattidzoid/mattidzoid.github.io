let slideIndex = 1;
let slides = document.getElementsByClassName("gallery_slides");

showSlides(slideIndex);

function plusSlides() {
    showSlides(slideIndex++);
}

function showSlides(n) {
    let i;
    if (n > slides.length - 1) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

setInterval(plusSlides, 3500);
