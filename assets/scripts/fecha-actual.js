//FECHA ACTUAL

// Obtener el elemento donde se mostrará el año
const yearElement = document.getElementById("current-year");
// Obtener el año actual
const currentYear = new Date().getFullYear();
// Actualizar el contenido del elemento con el año actual
yearElement.textContent = currentYear;
