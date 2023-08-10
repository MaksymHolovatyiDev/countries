import { useEffect, useState } from 'react';

export default function CustomInput({
  countries,
  serFilteredCountries,
  region,
}: any) {
  const [text, setText] = useState('');

  useEffect(() => {
    const filteredCountries = countries.filter((el: any) =>
      el.name.common.toUpperCase().includes(text.toUpperCase())
    );

    serFilteredCountries(text ? filteredCountries : null);
  }, [region, countries]);

  const filterByRegion = (evt: any) => {
    setText(evt.target.value);
    const filteredCountries = countries.filter((el: any) =>
      el.name.common.toUpperCase().includes(evt.target.value.toUpperCase())
    );

    serFilteredCountries(evt.target.value ? filteredCountries : null);
  };

  return (
    <label className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 absolute lg:top-6 top-2/4 left-4 tr-y stroke-dark-gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search for a country..."
        className="h-12 lg:w-full lg:mb-6 w-my pl-16 text-dark-gray rounded outline-none"
        value={text}
        onChange={filterByRegion}
      />
    </label>
  );
}
