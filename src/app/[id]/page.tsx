'use client';

import { ParamsTypes } from '@Types';
import BackBtn from '@components/BackBtn/BackBtn';
import CurrentCountry from '@components/CurrentCountry/CurrentCountry';
import Header from '@components/Header/Header';
import ThemeProvider from '@components/ThemeProvider/ThemeProvider';

export default function Country({ params }: ParamsTypes) {
  return (
    <ThemeProvider>
      <Header />

      <main>
        <section className="lg:px-10 px-20 py-8">
          <BackBtn />
          <CurrentCountry path={params.id} />
        </section>
      </main>
    </ThemeProvider>
  );
}
