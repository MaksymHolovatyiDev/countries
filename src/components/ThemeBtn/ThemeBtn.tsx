'use client';

import { useEffect } from 'react';

export default function ThemeBtn({ theme, setTheme }: any) {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const getTheme = (evt: any) => {
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
        onClick={getTheme}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="lg:w-5 lg:h-5  w-6 h-6 stroke-very-dark-blue mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      Dark Mode
    </label>
  );
}
