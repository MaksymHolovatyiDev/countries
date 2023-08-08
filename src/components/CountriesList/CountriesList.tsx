import CountryListItem from './CountriesListItem';
import { getAllCountries } from '@helpers/getCountries';

export default async function CountriesListItemType() {
  const data = await getAllCountries();
  return (
    <ul>
      {data.map((el: any) => (
        <CountryListItem data={el} />
      ))}
    </ul>
  );
}
