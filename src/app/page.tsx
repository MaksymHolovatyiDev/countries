'use client';

import { useEffect, useState } from 'react';

import Header from '@components/Header/Header';
import CountriesList from '@components/CountriesList/CountriesList';
import Filter from '@components/Filter/Filter';
import { getAllCountries } from '@helpers/getCountries';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, serFilteredCountries] = useState(null);

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="lg:px-10 px-20 py-8">
          <Filter
            setCountries={setCountries}
            serFilteredCountries={serFilteredCountries}
            countries={countries}
          />
          <CountriesList
            countries={filteredCountries ? filteredCountries : countries}
          />
        </section>
      </main>
    </>
  );
}
