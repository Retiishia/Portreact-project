import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const localeFiles = import.meta.glob('./data/locales/*/*.json', { eager: true });

const translations = Object.entries(localeFiles).reduce((acc, [filePath, moduleValue]) => {
  const match = filePath.match(/^\.\/data\/locales\/([^/]+)\/([^/]+)\.json$/);

  if (!match) return acc;

  const [, lang, section] = match;
  if (!acc[lang]) acc[lang] = {};
  acc[lang][section] = moduleValue.default ?? moduleValue;

  return acc;
}, {});

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [displayedSection, setDisplayedSection] = useState('hero');
  const [isHidden, setIsHidden] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'id' : 'en'));
  };

  // Smooth fade-out → switch → fade-in
  const handleSelectSection = useCallback((section) => {
    if (section === activeSection) return;
    setIsHidden(true); // fade out
    setTimeout(() => {
      setActiveSection(section);
      setDisplayedSection(section);
      // Let React paint the new component, then fade in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsHidden(false);
        });
      });
    }, 280); // match CSS fade-out duration
  }, [activeSection]);

  const t = translations[lang] || translations.en;

  const renderSection = () => {
    switch (displayedSection) {
      case 'about':
        return <About t={t} />;
      case 'projects':
        return <Projects t={t} />;
      case 'experience':
        return <Experience t={t} />;
      case 'contact':
        return <Contact t={t} />;
      case 'hero':
      default:
        return <Hero onSelectSection={handleSelectSection} t={t} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={toggleLang}
        t={t}
      />
      <main className="main-viewport">
        <div className={`view-section ${isHidden ? 'view-section--hidden' : ''}`}>
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
