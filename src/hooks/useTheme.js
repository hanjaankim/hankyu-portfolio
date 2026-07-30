import { useCallback, useEffect, useState } from "react";

function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Dark is the site default; light is an explicit opt-in persisted to
 * localStorage. index.html sets the initial data-theme attribute inline
 * (before React mounts) to avoid a flash of the wrong theme.
 */
function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return [theme, toggleTheme];
}

export default useTheme;
