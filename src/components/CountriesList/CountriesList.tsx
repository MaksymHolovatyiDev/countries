import CountryListItem from './CountriesListItem';
import { getAllCountries } from '@helpers/getCountries';

export default async function CountriesListItemType({ countries }: any) {
  const data = countries ? countries : await getAllCountries();
  return (
    <ul className="grid gap-12 lg:grid-cols-1 grid-cols-4 ">
      {data.map((el: any) => (
        <CountryListItem data={el} />
      ))}
    </ul>
  );
}
