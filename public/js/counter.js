document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let hasCounted = false;

  const countUp = () => {
    if (hasCounted) return;
    hasCounted = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("num-target");
      const speed = counter.getAttribute("num-count-speed");

      let count = 0;
      const increment = target / speed;

      const update = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      countUp();
    }
  }, { threshold: 0.2 });

  const statSection = document.querySelector(".counter");
  if (statSection) {
    observer.observe(statSection);
  }
});
