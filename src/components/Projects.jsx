import { useState } from 'react';
import './Projects.css';

export default function Projects({ t }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'web' | 'jsvanilla' | 'college'

  const filterTabs = [
    { id: 'all', label: t.projects.filterTabs.all },
    { id: 'web', label: t.projects.filterTabs.web },
    { id: 'jsvanilla', label: t.projects.filterTabs.jsvanilla },
    { id: 'college', label: t.projects.filterTabs.college },
  ];

  const filteredProjects = t.projects.items.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Filter Sub-Tabs */}
        <div className="projects__filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`projects__filter-btn ${filter === tab.id ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              <span className="projects__filter-dot"></span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <div className="projects__card solid-card" key={project.id || project.title}>
              {/* Project Window Header */}
              <div className="projects__card-window-bar">
                <div className="projects__card-dots">
                  <span className="projects__card-dot projects__card-dot--red"></span>
                  <span className="projects__card-dot projects__card-dot--yellow"></span>
                  <span className="projects__card-dot projects__card-dot--green"></span>
                </div>
                <span className="projects__card-filename">{project.filename}</span>
              </div>

              {/* Image Preview Container */}
              <div className="projects__card-preview">
                <a
                  href={project.url}
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      {t.projects.viewGithub}
                    </span>
                  </div>
                </a>
              </div>

              {/* Card Body */}
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.desc}</p>

                {/* Tech Stack Badges */}
                <div className="projects__card-tags">
                  {project.stack.split(',').map((tech) => (
                    <span className="projects__card-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="projects__card-footer">
                  <a
                    href={project.url}
                    className="projects__link-btn projects__link-btn--demo"
                    target="_blank"
                    rel="noreferrer"
                    title="View Project"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {project.url.includes('github') ? t.projects.githubBtn : t.projects.demoBtn}
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
