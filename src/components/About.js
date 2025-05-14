import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

const About = () => {
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('locale');
      if (stored) setLocale(() => stored);
    }
  }, []);

  return (
    <section id="about" className="about container" aria-labelledby="about-heading" role="region" aria-label={t('about.title', {}, locale) + ' – Perfil profesional de Diego Barreiro'}>
      <div className="about-content">
        <Image src="/images/profile.webp" alt="Diego Barreiro, desarrollador full-stack, foto de perfil profesional" className="profile-picture" width={180} height={180} loading="lazy" />
        <h2 id="about-heading">{t('about.title', {}, locale)}</h2>
        <p>{t('about.intro', {}, locale)}</p>
        <p>{t('about.p1', {}, locale)}</p>
        <p>{t('about.p2', {}, locale)}</p>
        <p>{t('about.p3', {}, locale)}</p>
        <p>{t('about.p4', {}, locale)}</p>
        <p>{t('about.p5', {}, locale)}</p>
        <div className="button-group">
          <a href="#contact" className="btn" aria-label={t('about.contact', {}, locale) + ' – Ir a la sección de contacto'}>{t('about.contact', {}, locale)}</a>
          <a href="/documents/CV_Diego_Barreiro.pdf" download="CV_Diego_Barreiro.pdf" className="btn" target="_blank" rel="noopener noreferrer" aria-label={t('about.downloadCV', {}, locale) + ' – Descargar CV en PDF'}>{t('about.downloadCV', {}, locale)}</a>
        </div>
      </div>
    </section>
  );
};

export default About;
