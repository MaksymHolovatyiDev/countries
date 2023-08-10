'use client';

import { useEffect, useState } from 'react';

import { ParamsTypes } from '@Types';
import BackBtn from '@components/BackBtn/BackBtn';
import CurrentCountry from '@components/CurrentCountry/CurrentCountry';
import Header from '@components/Header/Header';
import Spinner from '@components/Spinner/Spinner';

export default function Country({ params }: ParamsTypes) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
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
            <section className="lg:px-10 px-20 py-8">
              <BackBtn />
              <CurrentCountry path={params.id} />
            </section>
          </main>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
