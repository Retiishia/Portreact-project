import '../css/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="section-divider"></div>
      <div className="footer__content container">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-name">Farhan Aziz</span>
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>
          <p className="footer__tagline">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className="footer__center">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Farhan Aziz. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <span className="footer__heart">♥</span> using React &amp; Vite
          </p>
        </div>

        <div className="footer__right">
          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
