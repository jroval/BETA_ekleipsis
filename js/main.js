// MENÚ MÓVIL
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// ACORDEÓN PROGRAMA
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.parentElement;
    day.classList.toggle("active");
  });
});

// PRECIO AUTOMÁTICO POR FECHA
const today = new Date();

const phases = [
  { id: "phase1", name: "Fase 1", price: "80 €",  start: new Date("2026-04-30"), end: new Date("2026-06-03") },
  { id: "phase2", name: "Fase 2", price: "135 €", start: new Date("2026-06-04"), end: new Date("2026-07-08") },
  { id: "phase3", name: "Fase 3", price: "190 €", start: new Date("2026-07-09"), end: new Date("2026-08-12") }
];

const currentPrice = document.getElementById("currentPrice");
const pricePhase = document.getElementById("pricePhase");

function updateTicketPrice() {
  let activePhase = phases[0];
  phases.forEach((phase) => {
    if (today >= phase.start && today <= phase.end) activePhase = phase;
  });

  if (currentPrice) currentPrice.textContent = activePhase.price;
  if (pricePhase) pricePhase.textContent = activePhase.name;

  phases.forEach((phase) => {
    const el = document.getElementById(phase.id);
    if (el) el.classList.remove("active");
  });

  const activeEl = document.getElementById(activePhase.id);
  if (activeEl) activeEl.classList.add("active");
}

updateTicketPrice();

// MAPA INTERACTIVO
const mapButtons = document.querySelectorAll(".map-point");
const mapInfo = document.getElementById("mapInfo");

mapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.title;
    const text = button.dataset.text;
    mapInfo.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    mapButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// HEADER
const siteHeader = document.querySelector(".site-header");

function handleHeader() {
  if (window.innerWidth <= 767) {
    siteHeader.classList.add("visible");
  } else {
    if (window.scrollY > 80) {
      siteHeader.classList.add("visible");
    } else {
      siteHeader.classList.remove("visible");
    }
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader);
window.addEventListener("resize", handleHeader);