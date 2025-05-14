import React from 'react';

const LanguageSwitcher = () => {
  const [current, setCurrent] = React.useState('es');

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setCurrent(window.localStorage.getItem('locale') || 'es');
    }
  }, []);

  const setLocale = (locale) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', locale);
      window.location.reload();
    }
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
      <button
        onClick={() => setLocale('es')}
        disabled={current === 'es'}
        aria-label="Cambiar a español"
        style={{ fontWeight: current === 'es' ? 'bold' : 'normal' }}
      >
        Español
      </button>
      <button
        onClick={() => setLocale('en')}
        disabled={current === 'en'}
        aria-label="Switch to English"
        style={{ fontWeight: current === 'en' ? 'bold' : 'normal' }}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
