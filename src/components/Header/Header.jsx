import { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import useTheme from "../../hooks/useTheme";
import "./Header.css";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function Header() {
  const activeId = useActiveSection(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#hero" className="header__brand" onClick={closeMenu}>
          김한규
        </a>

        <nav
          id="primary-nav"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
        >
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`header__nav-link ${
                    activeId === item.id ? "header__nav-link--active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <button
            type="button"
            className="header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">메뉴 열기</span>
            <span className="header__menu-toggle-bar" />
            <span className="header__menu-toggle-bar" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
