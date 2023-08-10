import CountryListItem from './CountriesListItem';

export default function CountriesListItemType({ countries }: any) {
  return (
    <ul className="grid gap-12 lg:grid-cols-1 grid-cols-4 ">
      {countries.map((el: any) => (
        <li key={el.flags.png}>
          <CountryListItem data={el} />
        </li>
      ))}
    </ul>
  );
}
