import React from 'react';
import { ThemeProvider } from './Theme';
import { LanguageProvider } from './Language';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import Content from './Content';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Content />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
