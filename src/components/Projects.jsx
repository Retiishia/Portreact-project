import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A modern dashboard for managing online stores with real-time analytics, order management, and inventory tracking.',
    tags: ['React', 'CSS', 'REST API'],
    image: '/projects/ecommerce.svg',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Weather Application',
    description:
      'Clean weather app with 7-day forecasts and location-based data using OpenWeather API.',
    tags: ['React', 'API', 'CSS'],
    image: '/projects/weather.svg',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management tool with drag-and-drop features and team workspace features.',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    image: '/projects/taskmanager.svg',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A sleek single-page application with smooth view switching and responsive design.',
    tags: ['React', 'Vite', 'CSS'],
    image: '/projects/portfolio.svg',
    github: 'https://github.com',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of web development projects I've built
          </p>
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
                  title={`View ${project.title} on GitHub`}
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
                      View GitHub Repository
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
                    GitHub
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
                    Live Demo
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
