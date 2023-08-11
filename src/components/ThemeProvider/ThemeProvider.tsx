import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { ThemeContextValue } from '@Types';
import ShowSpinner from '@components/ShowSpinner/ShowSpinner';

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const newTheme =
      localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

    setTheme(newTheme!);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ShowSpinner show={!theme}>{children}</ShowSpinner>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
