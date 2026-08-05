import '../css/Experience.css';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    period: '2024 — Present',
    description:
      'Building modern web applications with React. Collaborating with design and backend teams to deliver clean user experiences.',
    type: 'work',
  },
  {
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2023 — 2024',
    description:
      'Developed responsive websites for clients. Implemented clean code and optimized web performance.',
    type: 'work',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2022 — 2023',
    description:
      'Created custom websites and web tools for small businesses and independent clients.',
    type: 'freelance',
  },
  {
    role: 'Computer Science Student',
    company: 'University',
    period: '2020 — 2024',
    description:
      'Studied software engineering principles, algorithms, and frontend development methodologies.',
    type: 'education',
  },
];

export default function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-subtitle">
            A breakdown of my professional journey and educational background
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, idx) => (
            <div className="experience__item" key={idx}>
              <div className="experience__dot"></div>
              <div className="experience__card solid-card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <span className="experience__company">{exp.company}</span>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{exp.period}</span>
                    <span className={`experience__type experience__type--${exp.type}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="experience__description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
