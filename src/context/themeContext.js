import React, { useState, useEffect, createContext } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem('theme-color');
    if (typeof storedTheme === 'string') {
      return storedTheme;
    }

    // const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    // if (userMedia.matches) {
    //   return 'dark';
    // }
  }

  return 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const updateThemeClass = (theme) => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme-color', theme);
  };

  useEffect(() => {
    updateThemeClass(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext();
