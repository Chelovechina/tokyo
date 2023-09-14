const cursorInner = document.getElementById("cursor-inner");
const cursorOutter = document.getElementById("cursor-outter");

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile_nav");

// Move cursor
window.addEventListener("mousemove", (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorInner.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
  cursorOutter.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15
    }px)`;
});

// Burger menu toggle
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
