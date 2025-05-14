document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((sec, i) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";
    setTimeout(() => {
      sec.style.transition = "all 0.6s ease";
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, 300 + i * 200);
  });
});
