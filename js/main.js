/* ============================================================
   EKLEIPSIS FEST 2026 — main.js
   ============================================================ */

// ── MENÚ MÓVIL ─────────────────────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const mainNav    = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// ── ACORDEÓN PROGRAMA ──────────────────────────────────────────
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

// ── MAPA INTERACTIVO ───────────────────────────────────────────
const mapButtons = document.querySelectorAll(".map-point");
const mapInfo    = document.getElementById("mapInfo");

mapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.title;
    const text  = button.dataset.text;
    mapInfo.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    mapButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// ── HEADER ─────────────────────────────────────────────────────
const siteHeader = document.querySelector(".site-header");

function handleHeader() {
  if (window.innerWidth <= 767) {
    siteHeader.classList.add("visible");
  } else {
    siteHeader.classList.toggle("visible", window.scrollY > 80);
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader);
window.addEventListener("resize", handleHeader);

// ── DROPDOWN IDIOMA MÓVIL ──────────────────────────────────────
const langSwitcher = document.querySelector(".language-switcher");

langSwitcher.addEventListener("click", (e) => {
  if (window.innerWidth > 767) return;
  const clickedBtn = e.target.closest(".lang-btn");
  if (!clickedBtn) return;
  if (!langSwitcher.classList.contains("open")) {
    e.stopPropagation();
    langSwitcher.classList.add("open");
    return;
  }
  langSwitcher.classList.remove("open");
});

document.addEventListener("click", () => {
  langSwitcher.classList.remove("open");
});

menuToggle.addEventListener("click", () => {
  langSwitcher.classList.remove("open");
});