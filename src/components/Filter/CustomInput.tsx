import SearchSvg from '@assets/icons/SearchSvg';
import { useFilter } from '@components/FilterProvider/FilterProvider';
import { useEffect, useState } from 'react';

export default function CustomInput() {
  const [text, setText] = useState('');
  const { countries, region, setFilteredCountries } = useFilter();

  useEffect(() => {
    const filteredCountries = countries.filter((el: any) =>
      el.name.common.toUpperCase().includes(text.toUpperCase())
    );

    setFilteredCountries(text ? filteredCountries : null);
  }, [region, countries]);

  const filterByRegion = (evt: any) => {
    setText(evt.target.value);
    const filteredCountries = countries.filter((el: any) =>
      el.name.common.toUpperCase().includes(evt.target.value.toUpperCase())
    );

    setFilteredCountries(evt.target.value ? filteredCountries : null);
  };

  return (
    <label className="relative shadow">
      <SearchSvg />

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
