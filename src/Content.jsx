import React, { useContext } from 'react';
import { LanguageContext } from './Language';
import { ThemeContext } from './Theme';

const Content = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const text = language === 'en' ? 'Hello, World!' : '¡Hola, Mundo!';

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Content;
