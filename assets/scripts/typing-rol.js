//TYPING ROL

const roles = [
  "Desarrollador Front-End",
  "Desarrollador Full-Stack",
  "Productor Multimedia",
];
const typedRolesElement = document.getElementById("typed-roles");
let roleIndex = 0;
let charIndex = 0;
function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typedRolesElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 3000);
  }
}
function eraseRole() {
  if (charIndex > 0) {
    typedRolesElement.textContent = roles[roleIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}
typedRolesElement.classList.add("typing");
typeRole();
document.querySelectorAll(".mas-info-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const hiddenInfo = this.nextElementSibling;
    hiddenInfo.style.display =
      hiddenInfo.style.display === "block" ? "none" : "block";
  });
});
