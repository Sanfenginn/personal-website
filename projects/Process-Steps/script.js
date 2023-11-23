let buttonPrev = document.querySelector("#prev");
let buttonNext = document.querySelector("#next");
let progress = document.getElementById("progress");
let circles = document.querySelectorAll(".circle");

let currentActive = 1;

buttonNext.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

buttonPrev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    let activeCircles = document.querySelectorAll(".active");

    progress.style.width =
      ((activeCircles.length - 1) / (circles.length - 1)) * 99 + "%";
  });

  if (currentActive === 1) {
    buttonPrev.disabled = true;
  } else if (currentActive === circles.length) {
    buttonNext.disabled = true;
  } else {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}
