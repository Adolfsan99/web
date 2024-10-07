/* 

// Selecciona todos los enlaces <a> en el documento
const enlaces = document.querySelectorAll("a");

// Itera sobre cada enlace y añade un evento de clic
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function (event) {
    // Excluir enlaces que tienen un hash (anclas internas)
    if (enlace.getAttribute("href").startsWith("#")) {
      return; // No hace nada en estos casos
    }

    // Evita que el navegador siga el enlace inmediatamente
    event.preventDefault();

    // Muestra una confirmación al usuario
    const confirmacion = confirm(
      "¿Estás seguro de que quieres ir a este enlace?"
    );

    // Si el usuario confirma, redirige al enlace
    if (confirmacion) {
      window.location.href = enlace.href;
    }
  });
});
