//MENU HAMBURGUESA

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".navegacion__elemento a"); // Seleccionamos todos los enlaces dentro de los <li>

// Evento del botón "hamburger" para alternar el menú
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.textContent = nav.classList.contains("active") ? "×" : "☰";
});

// Añadimos un evento a todos los enlaces para que oculten el menú al hacer clic
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      // Retrasamos la acción de cerrar el menú por 1.5 segundos
      setTimeout(() => {
        nav.classList.remove("active"); // Oculta el menú
        hamburger.textContent = "☰"; // Cambia el icono del "hamburger" a su estado original
      }, 250); // Retraso de 250 milisegundos (0.25 segundos)
    }
  });
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  const isClickInside =
    nav.contains(event.target) || hamburger.contains(event.target);
  if (
    !isClickInside &&
    nav.classList.contains("active") &&
    window.innerWidth <= 768
  ) {
    nav.classList.remove("active");
    hamburger.textContent = "☰";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    hamburger.textContent = "☰";
  }
});
