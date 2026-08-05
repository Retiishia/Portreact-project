import './Projects.css';

const projectBase = [
  {
    image: '/projects/ecommerce.svg',
    tags: ['React', 'CSS', 'REST API'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    image: '/projects/weather.svg',
    tags: ['React', 'API', 'CSS'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    image: '/projects/taskmanager.svg',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    image: '/projects/portfolio.svg',
    tags: ['React', 'Vite', 'CSS'],
    github: 'https://github.com',
    demo: '#',
  },
];

export default function Projects({ t }) {
  const projects = t.projects.items.map((item, idx) => ({
    ...item,
    ...projectBase[idx],
  }));

  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <div className="projects__card solid-card" key={project.title}>
              <div className="projects__card-preview">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__card-img-link"
                  title={`${t.projects.viewGithub}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__card-img"
                    loading="lazy"
                  />
                  <div className="projects__card-img-hover">
                    <span className="projects__card-img-tag">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {t.projects.viewGithub}
                    </span>
                  </div>
                </a>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span className="projects__card-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__card-footer">
                  <a
                    href={project.github}
                    className="projects__link-btn projects__link-btn--github"
                    target="_blank"
                    rel="noreferrer"
                    title="View Source Code"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    {t.projects.githubBtn}
                  </a>

                  <a
                    href={project.demo}
                    className="projects__link-btn projects__link-btn--demo"
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {t.projects.demoBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
