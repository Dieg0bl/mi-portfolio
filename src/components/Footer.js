import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const translations = {
  es: require('../locales/es.json'),
  en: require('../locales/en.json'),
};

const t = (key, vars = {}, locale = 'es') => {
  let str = (translations[locale] && translations[locale][key]) || translations['es'][key] || key;
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replace(`{{${k}}}`, v);
  });
  return str;
};

const Footer = () => {
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('locale');
      if (stored) setLocale(() => stored);
    }
  }, []);

  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página – Contacto y redes de Diego Barreiro">
      <div className="container">
        <p>{t('footer.copyright', { year: new Date().getFullYear() }, locale)}</p>
        <div className="social-links-footer">
          <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedin', {}, locale) + ' – Perfil profesional LinkedIn'}>
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer" aria-label={t('footer.github', {}, locale) + ' – Repositorio GitHub'}>
            <FaGithub size={20} />
          </a>
          <a href="mailto:contacto@diegobarreiro.dev" aria-label={t('footer.email', {}, locale) + ' – Email principal'}>
            <FaEnvelope size={25} />
          </a>
        </div>
        <div style={{marginTop: '10px'}}>
          <strong>{t('footer.altEmail', {}, locale)}</strong> <a href="mailto:diegobarreirodev@gmail.com">diegobarreirodev@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
