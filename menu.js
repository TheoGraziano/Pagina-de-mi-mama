const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("arial-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("arial-label", "Abrir menú");
    }
});