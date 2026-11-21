(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "theme";
  let preference;

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
      preference = saved;
    }
  } catch {
    // A browser can block storage, including for some local previews.
  }

  function applyTheme() {
    const theme = preference ?? (systemTheme.matches ? "dark" : "light");
    root.dataset.theme = theme;
    return theme;
  }

  applyTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");

    function updateTheme() {
      button.setAttribute("aria-pressed", String(applyTheme() === "dark"));
    }

    button.addEventListener("click", () => {
      preference = root.dataset.theme === "dark" ? "light" : "dark";
      updateTheme();

      try {
        window.localStorage.setItem(storageKey, preference);
      } catch {
        // The switch still works on the current page without storage.
      }
    });

    systemTheme.addEventListener("change", updateTheme);
    updateTheme();
    button.hidden = false;
  });
})();
