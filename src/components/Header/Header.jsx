import { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#hero" className="header__brand" onClick={closeMenu}>
          김한규
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">메뉴 열기</span>
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

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
      </div>
    </header>
  );
}

export default Header;
