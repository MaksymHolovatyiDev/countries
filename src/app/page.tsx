import Header from '@components/Header/Header';
import CountriesList from '@components/CountriesList/CountriesList';
import Filter from '@components/Filter/Filter';

export default async function Home() {
  return (
    <>
      <Header />
      <Filter />
      <CountriesList />
    </>
  );
}
