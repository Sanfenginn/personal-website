// 设置图片轮播器
// Declare slideIndex at the top of your script so it's in the global scope
let slideIndex = 1;

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {
  createDots();
  showSlides(slideIndex);
});

// Function to dynamically create dots
function createDots() {
  let carouselIndicators = document.querySelector(".photo-carousel-indicators");
  let slides = document.getElementsByClassName("slide");
  // Clear existing dots to prevent duplicates if createDots is called more than once
  carouselIndicators.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    (function (index) {
      dot.addEventListener("click", function () {
        currentSlide(index + 1);
      });
    })(i);
    carouselIndicators.appendChild(dot);
  }
  // Activate the first dot
  if (carouselIndicators.children.length > 0) {
    carouselIndicators.children[0].classList.add("active");
  }
}

// Function to go to the current slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to change the slide when clicking next/prev
/* eslint-disable-next-line no-unused-vars */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Main function to show slides
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let caption;

  // Wrap around the slide index if it goes out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and deactivate all dots
  // for (let i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");

    caption = slides[i].querySelector(".caption");
    if (caption) {
      caption.classList.remove("active-label-nutrition-facts");
    }
  }

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change caption color if the slide has a specific class
  caption = slides[slideIndex - 1].querySelector(".caption");
  if (
    slides[slideIndex - 1].classList.contains("heading-label-nutrition-facts")
  ) {
    if (caption) {
      caption.classList.add("active-label-nutrition-facts");
    }
  }
  if (
    slides[slideIndex - 1].classList.contains(
      "heading-rotating-navigation-animation"
    )
  ) {
    if (caption) {
      caption.classList.add("active-rotating-navigation-animation");
    }
  }
}
