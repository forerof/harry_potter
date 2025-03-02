document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggleButton.classList.toggle("close"); // Cambia el ícono de hamburguesa a "X"
        toggleButton.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
    });
});
