import '../css/About.css';

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About Creating</h2>
          <p className="section-subtitle">
            A little background about who I am and what drives me to build clean web applications
          </p>
        </div>

        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image-container solid-card">
              <span className="about__image-icon">👨‍💻</span>
            </div>
          </div>

          <div className="about__content">
            <p className="about__text">
              Hello! I'm <strong className="accent-text">Farhan Aziz</strong>, a passionate Frontend Developer
              based in Indonesia. I love building intuitive, reliable, and responsive
              web applications that deliver clean user experiences.
            </p>
            <p className="about__text">
              Specializing in modern web technologies, I build clean user interfaces using
              React, JavaScript, and semantic HTML/CSS.
            </p>

            <div className="about__info">
              <div className="about__info-item solid-card">
                <span className="about__info-icon">📍</span>
                <div>
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">Indonesia</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">🎓</span>
                <div>
                  <span className="about__info-label">Education</span>
                  <span className="about__info-value">Computer Science</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">💼</span>
                <div>
                  <span className="about__info-label">Experience</span>
                  <span className="about__info-value">2+ Years</span>
                </div>
              </div>
              <div className="about__info-item solid-card">
                <span className="about__info-icon">🌐</span>
                <div>
                  <span className="about__info-label">Languages</span>
                  <span className="about__info-value">Indonesian, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
