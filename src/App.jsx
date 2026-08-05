import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      case 'hero':
      default:
        return <Hero onSelectSection={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main-viewport">
        <div key={activeSection} className="view-section">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
