import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:azizfarhan72@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

// EmailJS Config Credentials
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_yggn0vr';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xq3kv57';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '52MPQAlD1FShsReAL';

export default function Contact({ t }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending' | 'sent' | 'error' | ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return t.contact.sendingBtn;
      case 'sent':
        return t.contact.sentBtn;
      case 'error':
        return t.contact.errorBtn;
      default:
        return t.contact.sendBtn;
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">{t.contact.getInTouch}</h3>
            <p className="contact__info-text">{t.contact.infoText}</p>

            <div className="contact__details">
              <div className="contact__detail-item">
                <div className="contact__detail-icon">📧</div>
                <div>
                  <span className="contact__detail-label">{t.contact.email}</span>
                  <a href="mailto:azizfarhan72@gmail.com" className="contact__detail-value">
                    azizfarhan72@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__detail-item">
                <div className="contact__detail-icon">📍</div>
                <div>
                  <span className="contact__detail-label">{t.contact.location}</span>
                  <span className="contact__detail-value">{t.contact.locationVal}</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} className="contact__form solid-card" onSubmit={handleSubmit}>
            {/* Hidden field for destination recipient email */}
            <input type="hidden" name="to_email" value="azizfarhan72@gmail.com" />
            <input type="hidden" name="to_name" value="Farhan Aziz" />

            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__form-label">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="contact__form-input"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__form-label">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="contact__form-input"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__form-input contact__form-textarea"
                placeholder={t.contact.messagePlaceholder}
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-primary contact__form-btn ${status === 'sent' ? 'contact__form-btn--sent' : ''} ${status === 'error' ? 'contact__form-btn--error' : ''}`}
              disabled={status === 'sending'}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
