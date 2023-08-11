'use client';

import Header from '@components/Header/Header';
import CountriesList from '@components/CountriesList/CountriesList';
import Filter from '@components/Filter/Filter';
import ThemeProvider from '@components/ThemeProvider/ThemeProvider';
import ShowSpinner from '@components/ShowSpinner/ShowSpinner';
import FilterProvider, {
  useFilter,
} from '@components/FilterProvider/FilterProvider';

export default function Home() {
  const { isLoading } = useFilter();
  return (
    <ThemeProvider>
      <Header />
      <main>
        <section className="lg:px-10 px-20 py-8 bg-very-light-gray min-h-screen">
          <FilterProvider>
            <Filter />
            <ShowSpinner show={isLoading}>
              <CountriesList />
            </ShowSpinner>
          </FilterProvider>
        </section>
      </main>
    </ThemeProvider>
  );
}
