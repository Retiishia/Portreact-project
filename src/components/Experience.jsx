import './Experience.css';

export default function Experience({ t }) {
  const experiences = t.experience.items;

  return (
    <div className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        {/* Work Experience Section */}
        <div className="experience__section">
          <div className="experience__timeline">
            {experiences.map((exp, idx) => (
              <div className="experience__item" key={idx}>
                <div className="experience__dot"></div>
                <div className="experience__card solid-card">
                  <div className="experience__card-header">
                    <div>
                      <h4 className="experience__role">{exp.role}</h4>
                      <span className="experience__company">{exp.company}</span>
                    </div>
                    <div className="experience__meta">
                      <span className="experience__period">{exp.period}</span>
                      <span className="experience__type">{exp.type}</span>
                    </div>
                  </div>
                  <p className="experience__description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
