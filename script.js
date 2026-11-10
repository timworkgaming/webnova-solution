// WebNova Solutions - Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = !navLinks.classList.contains("active");

        menuToggle.classList.toggle("active", isOpen);
        navLinks.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu after clicking a navigation link
    navItems.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

}