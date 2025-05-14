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
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".fade-in-title");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        title.classList.add("visible");
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(title);
});
