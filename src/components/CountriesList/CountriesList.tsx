import { useFilter } from '@components/FilterProvider/FilterProvider';
import CountryListItem from './CountriesListItem';
import { CountryListType } from '@Types';

export default function CountriesList() {
  const { filteredCountries, countries: ProvideCountries } = useFilter();
  const countries = filteredCountries ? filteredCountries : ProvideCountries;

  return (
    <ul className="grid gap-12 gtc-af">
      {countries.map((el: CountryListType) => (
        <li key={el.flags.png}>
          <CountryListItem data={el} />
        </li>
      ))}
    </ul>
  );
}
