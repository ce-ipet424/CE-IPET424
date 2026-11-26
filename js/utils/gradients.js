/* ==========================================
    GENERADOR DE DEGRADÉ ALEATORIO POR MODO
========================================== */

// Modos que NO deben recibir gradiente aleatorio (colores fijos)
const DISABLED_CLASSES = ["high-contrast-mode", "code-mode"];

// Dos paletas por modo: palette1 (más suave/base) y palette2 (más intensa/acento)
const MODE_PALETTES = {
    light: {
        palette1: ["#a8e4fa", "#ffffff"],
        palette2: ["#50c9f5", "#7cd7f8", "#ab89fc", "#00c4ff"],
    },
    dark: {
        palette1: ["#000745", "#010f8f", "#012eab"],
        palette2: ["#000745", "#010f8f", "#012eab"],
    },
    colorblind: {
        palette1: ["#0b131e", "#121d2d", "#080d14", "#1a293d", "#22344d"],
        palette2: ["#0b131e", "#121d2d", "#080d14", "#1a293d", "#22344d"],
    },
    mistery: {
        palette1: ["#1c1427", "#120d1a"],
        palette2: ["#ff6600", "#9933ff", "#ffcc00", "#7e22ce"],
    },
    holidays: {
        palette1: ["#113524", "#0b2217"],
        palette2: ["#d92b2b", "#1fb355", "#f2c94c", "#15803d"],
    },
    summer: {
        palette1: ["#0077b6", "#8ecae6"],
        palette2: ["#ffb703", "#fb8500", "#004e7c", "#38bdf8"],
    },
    pink: {
        palette1: ["#a8e4fa", "#fff"],
        palette2: ["#50c9f5", "#7cd7f8", "#ab89fc", "#00c4ff", "#ffdaf1", "#ffb4e2"],
    },
};

function getActiveModeKey() {
    const body = document.body;

    if (DISABLED_CLASSES.some((cls) => body.classList.contains(cls))) {
        return null;
    }
    if (body.classList.contains("colorblind-mode")) return "colorblind";
    if (body.classList.contains("mistery-mode")) return "mistery";
    if (body.classList.contains("holidays-mode")) return "holidays";
    if (body.classList.contains("summer-mode")) return "summer";
    if (body.classList.contains("pink-mode")) return "pink";
    if (body.classList.contains("dark-mode")) return "dark";

    return "light";
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function clearCardGradients(cards) {
    cards.forEach((card) => {
        card.style.removeProperty("background");
    });
}

export function applyRandomGradients() {
    const cards = document.querySelectorAll("[data-random-gradient]");
    if (cards.length === 0) return;

    const modeKey = getActiveModeKey();

    // Si está en modo código o alto contraste, removemos cualquier gradiente inline
    if (!modeKey) {
        clearCardGradients(cards);
        return;
    }

    const { palette1, palette2 } = MODE_PALETTES[modeKey] || MODE_PALETTES.light;

    cards.forEach((card) => {
        const color1 = pickRandom(palette1);
        let color2 = pickRandom(palette2);

        if (palette2.length > 1) {
            while (color1 === color2) {
                color2 = pickRandom(palette2);
            }
        }

        const angle = Math.floor(Math.random() * 360);
        card.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    });
}

export function initRandomGradients() {
    applyRandomGradients();

    // Reaplica o limpia automáticamente cuando cambia la clase del <body> al cambiar de tema
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                applyRandomGradients();
                break;
            }
        }
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
    });
}
