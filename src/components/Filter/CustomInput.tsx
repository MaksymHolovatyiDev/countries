import { useEffect, useState } from 'react';

import { CountryListType } from '@Types';
import SearchSvg from '@assets/icons/SearchSvg';
import { useFilter } from '@components/FilterProvider/FilterProvider';

export default function CustomInput() {
  const [text, setText] = useState('');
  const { countries, region, setFilteredCountries } = useFilter();

  useEffect(() => {
    const filteredCountries = countries.filter((el: CountryListType) =>
      el.name.common.toUpperCase().includes(text.toUpperCase())
    );

    setFilteredCountries(text ? filteredCountries : null);
  }, [region, countries]);

  const filterByRegion = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
    const filteredCountries = countries.filter((el: CountryListType) =>
      el.name.common.toUpperCase().includes(evt.target.value.toUpperCase())
    );

    setFilteredCountries(evt.target.value ? filteredCountries : null);
  };

  return (
    <label className="relative shadow">
      <SearchSvg className="w-5 h-5 absolute lg:top-6 top-2/4 left-4 tr-y stroke-dark-gray dark:stroke-white" />

      <input
        type="text"
        placeholder="Search for a country..."
        className="h-12 lg:w-full lg:mb-6 w-my pl-16 text-dark-gray rounded outline-none dark:bg-dark-blue dark:text-white"
        value={text}
        onChange={filterByRegion}
      />
    </label>
  );
}
