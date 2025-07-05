import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(savedLanguage);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); 
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
