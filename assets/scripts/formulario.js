document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Verifica el número de formularios enviados
    let formulariosEnviados = localStorage.getItem("formulariosEnviados") || 0;

    if (formulariosEnviados >= 2) {
      alert("Has alcanzado el límite de formularios que puedes enviar.");
      return; // Impide el envío si el límite se ha alcanzado
    }

    // Obtener los valores de los campos del formulario
    let nombreReclutador = document.getElementById("nombre_reclutador").value;
    let empresa = document.getElementById("empresa").value;
    let cargo =
      document.getElementById("cargo").value === "Otro"
        ? document.getElementById("otro_cargo").value
        : document.getElementById("cargo").value;
    let contrato = document.getElementById("contrato").value;
    let salario = document.getElementById("salario").value;
    let moneda = document.getElementById("moneda").value;
    let modalidad = document.getElementById("modalidad").value;
    let beneficios = document.getElementById("beneficios").value;
    let requisitos = document.getElementById("requisitos").value;
    let saludo = document.getElementById("saludo").value || "Hola"; // Usa "Hola" si no se proporciona un saludo
    let mensajePersonalizado =
      document.getElementById("mensaje_personalizado").value || ""; // Mensaje personalizado opcional

    // Crear el mensaje
    let mensaje = `${saludo}, estamos buscando un ${cargo} para la empresa ${empresa}. 
            \n*Contrato*: ${contrato}
            \n*Salario*: ${salario} ${moneda}
            \n*Modalidad de trabajo*: ${modalidad}
            \n*Beneficios*: ${beneficios}
            \n*Requisitos*: ${requisitos}
            \n${mensajePersonalizado}`;

    // Obtener el método de envío seleccionado
    let envioMetodo = document.getElementById("envio").value;

    if (envioMetodo === "email") {
      // Enviar por correo electrónico
      let destinatario = "sanchezlopezadolfo@gmail.com"; // Cambia esto por el correo real
      let asunto = encodeURIComponent("Detalles del Cargo: " + cargo);
      let body = encodeURIComponent(mensaje);
      let mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${body}`;
      window.open(mailtoLink, "_self");
    } else if (envioMetodo === "whatsapp") {
      // Enviar por WhatsApp
      let telefono = "573104679562"; // Cambia esto por el número real
      let whatsappLink = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(whatsappLink, "_blank");
    }

    // Incrementa el contador de formularios enviados
    localStorage.setItem(
      "formulariosEnviados",
      parseInt(formulariosEnviados) + 1
    );
  });

// Mostrar el campo de texto si se selecciona "Otro" en el menú de cargos
document.getElementById("cargo").addEventListener("change", function () {
  let otroCargo = document.getElementById("otro_cargo");
  if (this.value === "Otro") {
    otroCargo.style.display = "block";
    otroCargo.required = true;
  } else {
    otroCargo.style.display = "none";
    otroCargo.required = false;
  }
});
