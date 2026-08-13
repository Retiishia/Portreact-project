import '../css/About.css';

export default function About({ t }) {
  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__profile-card solid-card">
              <img src="../fubuki.webp" alt="Farhan Aziz Profile" className="about__profile-img" />
              <div className="about__profile-badge">
                <span className="about__profile-dot"></span>
                Farhan Aziz (Friz)
              </div>
            </div>
          </div>

          <div className="about__content">
            <p className="about__text">{t.about.bio1}</p>
            <p className="about__text">{t.about.bio2}</p>

            <div className="about__info">
              <div className="about__info-item solid-card">
                <span className="about__info-icon">📍</span>
                <div>
                  <span className="about__info-label">{t.about.location}</span>
                  <span className="about__info-value">{t.about.locationVal}</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">🎓</span>
                <div>
                  <span className="about__info-label">{t.about.education}</span>
                  <span className="about__info-value">{t.about.educationVal}</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">💼</span>
                <div>
                  <span className="about__info-label">{t.about.experience}</span>
                  <span className="about__info-value">{t.about.experienceVal}</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">🌐</span>
                <div>
                  <span className="about__info-label">{t.about.languages}</span>
                  <span className="about__info-value">{t.about.languagesVal}</span>
                </div>
              </div>
            </div>

            {/* Sleek Hover Button for Download CV */}
            <div className="about__actions">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary about__cv-btn"
                download="Farhan_Aziz_CV.pdf"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.about.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
