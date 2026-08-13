import { useState } from 'react';
import './About.css';

export default function About({ t }) {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'experience' | 'education' | 'cv'

  const tabs = [
    { id: 'about', label: 'about.cs', icon: '📄' },
    { id: 'experience', label: 'experience.cs', icon: '💼' },
    { id: 'education', label: 'education.cs', icon: '🎓' },
    { id: 'cv', label: 'cv.pdf', icon: '📑' },
  ];

  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* IDE-style Window Container */}
        <div className="about__ide-window solid-card">
          {/* IDE Window Header / Tabs */}
          <div className="about__ide-header">
            <div className="about__ide-controls">
              <span className="about__ide-dot about__ide-dot--red"></span>
              <span className="about__ide-dot about__ide-dot--yellow"></span>
              <span className="about__ide-dot about__ide-dot--green"></span>
            </div>
            <div className="about__ide-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`about__ide-tab ${activeTab === tab.id ? 'about__ide-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="about__ide-tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* IDE Code / Document Content Area */}
          <div className="about__ide-content">
            {activeTab === 'about' && (
              <div className="about__code-block">
                <div className="code-line"><span className="code-gray">// About me</span></div>
                <div className="code-line"><span className="code-pink">public class </span><span className="code-blue">About </span><span className="code-default">{'{'}</span></div>
                <div className="code-line"><span className="code-pink">    public string </span><span className="code-yellow">Role </span><span className="code-gray">=&gt; </span><span className="code-green">"{t.about.roleVal}"</span><span className="code-gray">;</span></div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="code-pink">    public string </span><span className="code-yellow">Bio </span><span className="code-gray">=&gt;</span></div>
                <div className="code-line"><span className="code-green">        "{t.about.bioVal}"</span><span className="code-gray">;</span></div>
                <div className="code-line"><span className="code-default">{'}'}</span></div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="about__code-block">
                <div className="code-line"><span className="code-gray">// Work Experience</span></div>
                <div className="code-line"><span className="code-pink">public class </span><span className="code-blue">Experience </span><span className="code-default">{'{'}</span></div>
                <div className="code-line"><span className="code-pink">    public List</span><span className="code-gray">&lt;</span><span className="code-blue">Job</span><span className="code-gray">&gt; </span><span className="code-yellow">Jobs </span><span className="code-gray">=&gt; </span><span className="code-pink">new</span><span className="code-gray">() </span><span className="code-default">{'{'}</span></div>
                {t.experience.items.map((job, idx) => (
                  <div key={idx} className="code-job-item">
                    <div className="code-line"><span className="code-default">        {'{'}</span></div>
                    <div className="code-line"><span className="code-orange">            Company</span><span className="code-gray">: </span><span className="code-green">"{job.company}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Type</span><span className="code-gray">: </span><span className="code-green">"{job.type}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Period</span><span className="code-gray">: </span><span className="code-green">"{job.period}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Role</span><span className="code-gray">: </span><span className="code-green">"{job.role}"</span></div>
                    <div className="code-line"><span className="code-default">        {'}'}{idx < t.experience.items.length - 1 ? ',' : ''}</span></div>
                  </div>
                ))}
                <div className="code-line"><span className="code-default">    {'}'};</span></div>
                <div className="code-line"><span className="code-default">{'}'}</span></div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="about__code-block">
                <div className="code-line"><span className="code-gray">// Education</span></div>
                <div className="code-line"><span className="code-pink">public record </span><span className="code-blue">Education </span><span className="code-default">{'{'}</span></div>
                <div className="code-line"><span className="code-pink">    public List</span><span className="code-gray">&lt;</span><span className="code-blue">School</span><span className="code-gray">&gt; </span><span className="code-yellow">Schools </span><span className="code-gray">=&gt; </span><span className="code-pink">new</span><span className="code-gray">() </span><span className="code-default">{'{'}</span></div>
                {t.education.items.map((school, idx) => (
                  <div key={idx} className="code-school-item">
                    <div className="code-line"><span className="code-default">        {'{'}</span></div>
                    <div className="code-line"><span className="code-orange">            Level</span><span className="code-gray">: </span><span className="code-green">"{school.level}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Name</span><span className="code-gray">: </span><span className="code-green">"{school.name}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Major</span><span className="code-gray">: </span><span className="code-green">"{school.major}"</span><span className="code-gray">,</span></div>
                    <div className="code-line"><span className="code-orange">            Period</span><span className="code-gray">: </span><span className="code-green">"{school.period}"</span></div>
                    <div className="code-line"><span className="code-default">        {'}'}{idx < t.education.items.length - 1 ? ',' : ''}</span></div>
                  </div>
                ))}
                <div className="code-line"><span className="code-default">    {'}'};</span></div>
                <div className="code-line"><span className="code-default">{'}'}</span></div>
              </div>
            )}

            {activeTab === 'cv' && (
              <div className="about__cv-viewer">
                <div className="about__cv-actions">
                  <span className="about__cv-filename">📄 cv.pdf</span>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download / View CV
                  </a>
                </div>
                <div className="about__cv-embed">
                  <iframe src="/cv.pdf" title="Curriculum Vitae" width="100%" height="450px" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
