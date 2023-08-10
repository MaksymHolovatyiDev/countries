'use client';

import { useEffect, useState } from 'react';

import Header from '@components/Header/Header';
import CountriesList from '@components/CountriesList/CountriesList';
import Filter from '@components/Filter/Filter';
import { getAllCountries } from '@helpers/getCountries';
import Spinner from '@components/Spinner/Spinner';

export default function Home() {
  const [theme, setTheme] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, serFilteredCountries] = useState(null);

  useEffect(() => {
    getAllCountries().then(el => {
      setCountries(el);
      setIsLoading(false);
    });
    const newTheme =
      localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

    setTheme(newTheme!);
  }, []);

  return (
    <>
      {theme ? (
        <>
          <Header theme={theme} setTheme={setTheme} />
          <main>
            <section className="lg:px-10 px-20 py-8 bg-very-light-gray min-h-screen">
              <Filter
                setCountries={setCountries}
                serFilteredCountries={serFilteredCountries}
                countries={countries}
              />
              {isLoading ? (
                <Spinner />
              ) : (
                <CountriesList
                  countries={filteredCountries ? filteredCountries : countries}
                />
              )}
            </section>
          </main>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
