// 导航栏功能
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.getElementById("navbar");
  let iconnavbar = document.getElementById("icon-navbar");
  let navTimeout;

  // Function to open the navigation bar
  function openNav() {
    navbar.style.width = "100%";
    // Set a timer to automatically close the navigation bar after 10 seconds
    navTimeout = setTimeout(closeNav, 10000);
  }

  // Function to close the navigation bar
  function closeNav() {
    navbar.style.width = "0";
    clearTimeout(navTimeout); // Clear the previous timer
  }

  // Function to toggle the navigation bar
  function toggleNav() {
    if (navbar.style.width === "0px" || navbar.style.width === "") {
      openNav();
    } else {
      closeNav();
    }
  }

  // Event listener to bind click event for the button
  iconnavbar.addEventListener("click", toggleNav);

  // Event listener to bind mouse enter event for opening the navbar
  iconnavbar.addEventListener("mouseenter", openNav);

  // Open the navigation bar by default
  openNav();
});

// 鼠标悬浮更改<img>的src
document
  .querySelector(".icon-navbar")
  .addEventListener("mouseenter", function () {
    this.src = "../images/icon-navbar2.png";
  });
document
  .querySelector(".icon-navbar")
  .addEventListener("mouseleave", function () {
    this.src = "../images/icon-navbar.png";
  });

document
  .querySelector(".number-email")
  .addEventListener("mouseenter", function () {
    document.querySelectorAll(".number-email-img").forEach(function (img) {
      img.src = "../images/icon-email-number.png";
    });
  });

document
  .querySelector(".number-email")
  .addEventListener("mouseleave", function () {
    document.querySelectorAll(".number-email-img").forEach(function (img) {
      img.src = "../images/icon-email.png";
    });
  });

document
  .querySelector(".number-telephone")
  .addEventListener("mouseenter", function () {
    document.querySelectorAll(".number-telephone-img").forEach(function (img) {
      img.src = "../images/icon-telephone-number.png";
    });
  });

document
  .querySelector(".number-telephone")
  .addEventListener("mouseleave", function () {
    document.querySelectorAll(".number-telephone-img").forEach(function (img) {
      img.src = "../images/icon-telephone.png";
    });
  });

document
  .querySelector(".number-location")
  .addEventListener("mouseenter", function () {
    document.querySelectorAll(".number-location-img").forEach(function (img) {
      img.src = "../images/icon-location-number.png";
    });
  });

document
  .querySelector(".number-location")
  .addEventListener("mouseleave", function () {
    document.querySelectorAll(".number-location-img").forEach(function (img) {
      img.src = "../images/icon-location.png";
    });
  });

// 点击对话框
// 获取图标和对话框元素
var talkIcon = document.querySelector(".talk");
var numberBox = document.querySelector(".number");

// 为图标添加点击事件监听器，切换对话框显示状态
talkIcon.addEventListener("click", function () {
  // 检查对话框的当前显示状态并切换它
  if (numberBox.style.display === "none") {
    numberBox.style.display = "block"; // 如果隐藏，则显示
    // 设置10秒后自动关闭对话框的计时器
    setTimeout(function () {
      numberBox.style.display = "none"; // 10秒后隐藏对话框
    }, 10000); // 10000毫秒后执行
  } else {
    numberBox.style.display = "none"; // 如果显示，则隐藏
  }
});
