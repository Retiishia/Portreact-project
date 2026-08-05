import { useState } from 'react';
import './Navbar.css';

export default function Navbar({
  activeSection,
  onSelectSection,
  theme,
  onToggleTheme,
  lang,
  onToggleLang,
  t,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id) => {
    onSelectSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <button
          className="navbar__logo"
          onClick={() => handleNavClick('hero')}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Farhan Aziz</span>
          <span className="navbar__logo-bracket"> /&gt;</span>
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}

          {/* Clean EN / ID Language Switcher */}
          <button
            className="navbar__lang-toggle"
            onClick={onToggleLang}
            aria-label="Toggle Language"
            title={`Switch to ${lang === 'en' ? 'Bahasa Indonesia' : 'English'}`}
          >
            {lang === 'en' ? 'EN' : 'ID'}
          </button>

          {/* Theme Switcher */}
          <button
            className="navbar__theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle Light/Dark Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="btn btn-primary navbar__cta"
            onClick={() => handleNavClick('contact')}
          >
            {t.nav.hireMe}
          </button>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
