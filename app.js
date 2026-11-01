(() => {
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  if (menuButton && mobileNav) {
    const closeMenu = () => {
      mobileNav.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Menüyü aç");
    };
    menuButton.addEventListener("click", () => {
      const opening = mobileNav.hidden;
      mobileNav.hidden = !opening;
      menuButton.setAttribute("aria-expanded", String(opening));
      menuButton.setAttribute("aria-label", opening ? "Menüyü kapat" : "Menüyü aç");
    });
    mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMenu(); });
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
