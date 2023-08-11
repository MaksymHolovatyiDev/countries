import {
  CommonName,
  CurrentCountryProfileType,
  NameType,
} from '@Types';

export default function CountryData({ data }: CurrentCountryProfileType) {
  return (
    <div className="flex lg:flex-col lg:space-y-10 justify-between">
      <div className="lg:space-y-2">
        <p>
          <span className="font-extrabold">Native name:</span>{' '}
          {(Object.values(data.name.nativeName)[0] as CommonName).common}
        </p>
        <p>
          <span className="font-extrabold">Population:</span> {data.population}
        </p>
        <p>
          <span className="font-extrabold">Region:</span> {data.region}
        </p>
        <p>
          <span className="font-extrabold">SubRegion:</span> {data.subregion}
        </p>
        <p>
          <span className="font-extrabold">Capital:</span> {data.capital}
        </p>
      </div>

      <div className="lg:space-y-2">
        <p>
          <span className="font-extrabold">Top level domain:</span>{' '}
          {data.tld.join(', ')}
        </p>
        <p>
          <span className="font-extrabold">Currencies:</span>{' '}
          {(Object.values(data.currencies) as NameType[])
            .map((el: NameType) => el.name)
            .join(', ')}
        </p>
        <p>
          <span className="font-extrabold">Languages:</span>{' '}
          {(Object.values(data.languages) as string[])
            .map((el: string) => el)
            .join(', ')}
        </p>
      </div>
    </div>
  );
}
