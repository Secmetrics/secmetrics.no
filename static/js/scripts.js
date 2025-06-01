// Counter animation with vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".display-4").forEach(function (element) {
    const target = parseInt(element.textContent);
    let count = 0;
    const duration = 2000;
    const step = target / (duration / 16); // 16ms is roughly one frame at 60fps

    const counter = setInterval(function () {
      count += step;
      if (count >= target) {
        element.textContent = target;
        clearInterval(counter);
      } else {
        element.textContent = Math.ceil(count);
      }
    }, 16);
  });
});

// 导航下拉菜单悬停效果
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      this.querySelector(".dropdown-menu").classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".dropdown-menu").classList.remove("show");
    });
  });
});
