import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { translations } from './translations';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
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

  const t = translations[lang] || translations.en;

  const renderSection = () => {
    switch (activeSection) {
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
        return <Hero onSelectSection={setActiveSection} t={t} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={toggleLang}
        t={t}
      />
      <main className="main-viewport">
        <div key={`${activeSection}-${lang}`} className="view-section">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
