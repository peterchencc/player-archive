import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === 'dark';
  };

  return (
    <div className="mx-4 sm:mx-8 py-4">
      <label>
        <input
          className="mr-2"
          type="checkbox"
          checked={isDark()}
          onChange={(event) =>
            setTheme(event.target.checked ? 'dark' : 'light')
          }
        ></input>
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;
