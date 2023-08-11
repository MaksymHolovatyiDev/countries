'use client';

import MoonSvg from '@assets/icons/MoonSvg';
import { useTheme } from '@components/ThemeProvider/ThemeProvider';

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  const getTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = evt.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <label className="lg:text-base flex cursor-pointer hover:text-dark-gray">
      <input
        type="checkbox"
        className="checkbox-color hidden"
        defaultChecked={theme === 'dark' ? true : false}
        onChange={getTheme}
      />
      <MoonSvg className="lg:w-5 lg:h-5  w-6 h-6 stroke-very-dark-blue mr-2" />
      Dark Mode
    </label>
  );
}
