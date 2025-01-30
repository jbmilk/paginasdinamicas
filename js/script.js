// DARK MODE (localStorage)
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme || "light");

const themeToggleButton = document.querySelector("#toggle-theme-button");
themeToggleButton?.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
}

// COLLAPSE CARDS
document.querySelectorAll(".card-collapse-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const content = trigger.closest(".card").querySelector(".card-content");
        const isCollapsed = content.classList.toggle("collapsed");
        trigger.classList.toggle("collapsed", isCollapsed);
        trigger.setAttribute("aria-expanded", !isCollapsed);
    });
});
