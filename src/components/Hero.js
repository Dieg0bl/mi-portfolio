import React from 'react';
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

const Hero = () => {
  const [locale, setLocale] = React.useState('es');
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('locale');
      if (stored) {
        setLocale(() => stored);
      }
    }
  }, []);
  return (
    <section id="home" className="hero" aria-label={t('hero.title', {}, locale) + ' – Presentación profesional de Diego Barreiro'}>
      <Image
        src="/images/hero-background.webp"
        alt="Fondo profesional de Diego Barreiro, desarrollador full-stack"
        className="hero-bg"
        fill
        style={{objectFit:'cover',zIndex:-1,top:0,left:0}}
        priority
        role="presentation"
        aria-hidden="true"
      />
      <div className="hero-overlay">
        <h1>{t('hero.title', {}, locale)}</h1>
        <p>{t('hero.subtitle', {}, locale)}</p>
        <a href="#about" className="btn">{t('hero.cta', {}, locale)}</a>
      </div>
    </section>
  );
};

export default Hero;
