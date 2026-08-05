import './About.css';

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
            <div className="about__image-container solid-card">
              <span className="about__image-icon">👨‍💻</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
