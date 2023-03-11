import { createContext, useState } from 'react';

interface ContextProps {
  theme: string;
  toggleTheme: () => void;
}
interface Props {
  children: JSX.Element;
}

export const ThemeContext = createContext<ContextProps | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(theme === '' ? 'dark' : '');
  };

  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
