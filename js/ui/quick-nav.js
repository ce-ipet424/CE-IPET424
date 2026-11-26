/* ==========================================
    PANEL DE NAVEGACIÓN RÁPIDA
========================================== */
let isOpen = false;
let currentIndex = 0;

export function initQuickNav() {
    const overlay = document.getElementById("quick-nav-overlay");
    if (!overlay) return;

    const items = Array.from(overlay.querySelectorAll(".quick-nav-item"));
    if (!items.length) return;

    const links = items.map((item) => item.querySelector("a"));

    // Marcar la página actual como punto de partida si existe en la lista
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const foundIndex = links.findIndex((a) => a && a.getAttribute("href") === currentPage);
    currentIndex = foundIndex >= 0 ? foundIndex : 0;

    function highlightItem(index) {
        currentIndex = (index + items.length) % items.length;
        items.forEach((item, i) => {
            item.classList.toggle("is-active", i === currentIndex);
        });
    }

    function openMenu() {
        isOpen = true;
        overlay.classList.remove("hidden");
        highlightItem(currentIndex);
    }

    function closeMenu() {
        isOpen = false;
        overlay.classList.add("hidden");
    }

    function navigateToSelected() {
        const link = links[currentIndex];
        if (!link) return;
        const href = link.getAttribute("href");
        closeMenu();
        if (href) {
            window.location.href = href;
        }
    }

    // Extra: permitir clic en cualquier tarjeta/ítem de la grilla
    items.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = i;
            navigateToSelected();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (!isOpen) {
            // Abrir con Alt + M
            if (e.altKey && e.key.toLowerCase() === "q") {
                e.preventDefault();
                openMenu();
                highlightItem(currentIndex + 1);
            }
            return;
        }

        // Menú abierto:
        if (e.key === "Escape") {
            e.preventDefault();
            closeMenu();
            return;
        }

        if (e.key === "Tab" || e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            highlightItem(currentIndex + (e.shiftKey ? -1 : 1));
            return;
        }

        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            highlightItem(currentIndex - 1);
            return;
        }

        if (e.key === "Enter") {
            e.preventDefault();
            navigateToSelected();
        }
    });

    // Al soltar Alt, ir directo a la opción marcada
    document.addEventListener("keyup", (e) => {
        if (isOpen && e.key === "Alt") {
            e.preventDefault();
            navigateToSelected();
        }
    });
}
