function smoothScroll(target) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function highlightCurrentSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navegacion__elemento");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Ignorar los enlaces específicos
    if (
      this.getAttribute("href") === "#sitios-web" ||
      this.getAttribute("href") === "#diseno-grafico" ||
      this.getAttribute("href") === "#proyectos-colaborativos" ||
      this.getAttribute("href") === "#proyectos-personales"
    ) {
      return; // Salir sin hacer nada
    }

    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    smoothScroll(target);
  });
});

window.addEventListener("scroll", highlightCurrentSection);
