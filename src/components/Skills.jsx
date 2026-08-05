import '../css/Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'Styling',
    icon: '✨',
    skills: [
      { name: 'CSS3 / Flexbox / Grid', level: 90 },
      { name: 'Sass / SCSS', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '⚡',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vite / Webpack', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            Tools and frameworks I use to build robust frontend applications
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div className="skills__card solid-card" key={category.title}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
