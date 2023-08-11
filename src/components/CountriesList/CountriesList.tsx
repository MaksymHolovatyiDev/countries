import { useFilter } from '@components/FilterProvider/FilterProvider';
import CountryListItem from './CountriesListItem';

export default function CountriesListItemType() {
  const {filteredCountries,countries: ProvideCountries }= useFilter();
  const countries = filteredCountries ? filteredCountries : ProvideCountries;
  
  return (
    <ul className="grid gap-12 gtc-af">
      {countries.map((el: any) => (
        <li key={el.flags.png}>
          <CountryListItem data={el} />
        </li>
      ))}
    </ul>
  );
}
