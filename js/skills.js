function getRandomPosition(element) {
  const icon = element.parentElement;
  const iconWidth = icon.clientWidth;
  const iconHeight = icon.clientHeight;
  const x = Math.random() * (iconWidth - element.offsetWidth);
  const y = Math.random() * (iconHeight - element.offsetHeight);
  return { x, y };
}

function setPosition(element, pos) {
  element.style.left = `${pos.x}px`;
  element.style.top = `${pos.y}px`;
}

function initBalls() {
  const balls = document.querySelectorAll(".ball");
  balls.forEach((ball) => {
    ball.style.transition = "none"; // Disable transition for initial position
    const randomPos = getRandomPosition(ball);
    setPosition(ball, randomPos);
    // Force reflow
    void ball.offsetWidth;
  });

  // Delayed start for movement
  setTimeout(() => {
    balls.forEach((ball) => {
      ball.style.transition = "left 20s linear, top 20s linear"; // Enable transition for smooth movement
    });
    floatBalls(); // Start movement
    setInterval(floatBalls, 20000); // Continue movement every 20 seconds
  }, 1000);
}

function floatBalls() {
  const balls = document.querySelectorAll(".ball");
  balls.forEach((ball) => {
    const randomPos = getRandomPosition(ball);
    setPosition(ball, randomPos);
  });
}

document.addEventListener("DOMContentLoaded", initBalls);
