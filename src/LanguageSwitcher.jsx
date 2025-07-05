import React, { useContext } from 'react';
import { LanguageContext } from './Language';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {language === 'en' ? 'English' : 'Español'}</p>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
};

export default LanguageSwitcher;
