/* ============================================================
   EKLEIPSIS FEST 2026 — main.js
   ============================================================ */

// ── ICONOS LUCIDE ─────────────────────────────────────────────
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// ── MENÚ MÓVIL ─────────────────────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });
  });
}

// ── ACORDEÓN PROGRAMA ──────────────────────────────────────────
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

// ── MAPA INTERACTIVO ───────────────────────────────────────────
const mapButtons = document.querySelectorAll(".map-point");
const mapInfo = document.getElementById("mapInfo");

if (mapButtons.length && mapInfo) {
  mapButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.title || "";
      const text = button.dataset.text || "";

      mapInfo.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
      mapButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

// ── DROPDOWN IDIOMA MÓVIL ──────────────────────────────────────
const langSwitcher = document.querySelector(".language-switcher");

if (langSwitcher) {
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

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      langSwitcher.classList.remove("open");
    });
  }
}

// ── SUCCESS FORMULARIOS NETLIFY ────────────────────────────────
const params = new URLSearchParams(window.location.search);
const formCard = document.getElementById("formCard");

if (params.get("success") === "true" && formCard) {
  formCard.classList.add("submitted");
}
