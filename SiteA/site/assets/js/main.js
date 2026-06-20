const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll("[data-slide]"));
  const previousButton = slideshow.querySelector("[data-slide-previous]");
  const nextButton = slideshow.querySelector("[data-slide-next]");
  const status = slideshow.querySelector("[data-slide-status]");

  if (slides.length < 2 || !previousButton || !nextButton || !status) {
    return;
  }

  let activeIndex = 0;
  let rotationTimer;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeIndex;
    });
    status.textContent = `${activeIndex + 1} / ${slides.length}`;
  };

  const stopRotation = () => {
    window.clearInterval(rotationTimer);
  };

  const startRotation = () => {
    if (reduceMotion) {
      return;
    }
    stopRotation();
    rotationTimer = window.setInterval(() => showSlide(activeIndex + 1), 7000);
  };

  previousButton.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    startRotation();
  });

  nextButton.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    startRotation();
  });

  slideshow.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showSlide(activeIndex - 1);
      startRotation();
    }
    if (event.key === "ArrowRight") {
      showSlide(activeIndex + 1);
      startRotation();
    }
  });

  slideshow.addEventListener("mouseenter", stopRotation);
  slideshow.addEventListener("mouseleave", startRotation);
  slideshow.addEventListener("focusin", stopRotation);
  slideshow.addEventListener("focusout", startRotation);

  showSlide(0);
  startRotation();
});
