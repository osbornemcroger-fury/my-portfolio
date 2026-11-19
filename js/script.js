const button = document.querySelector("#themeToggle");

function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    button.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
}

applyTheme(localStorage.getItem("theme") || "light");

button.addEventListener("click", function () {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
});