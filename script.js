const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Controlla se l'utente ha già selezionato il tema scuro in precedenza
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Funzione per cambiare tema
themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".navbar");

    navbarToggler.addEventListener("click", function () {
        navbar.classList.toggle("expanded");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".navbar");

    navbarToggler.addEventListener("click", function () {
        navbar.classList.toggle("expanded");
    });
});