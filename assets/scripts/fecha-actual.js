//FECHA ACTUAL

// Obtener el elemento donde se mostrará el año
const yearElement = document.getElementById("current-year");
// Obtener el año actual
const currentYear = new Date().getFullYear();
// Actualizar el contenido del elemento con el año actual
yearElement.textContent = currentYear;

// Obtener el elemento donde se mostrará el año
const yearElement2 = document.getElementById("current-year-2");
// Obtener el año actual
const currentYear2 = new Date().getFullYear();
// Actualizar el contenido del elemento con el año actual
yearElement2.textContent = currentYear2;
