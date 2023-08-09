'use client';

import { useEffect } from 'react';

import { CurrentCountryProfileType } from '@Types';

export default function CountryData({ data }: CurrentCountryProfileType) {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <p>
          <span className="font-extrabold">Native name:</span>{' '}
          {(Object.values(data.name.nativeName)[0] as any).common}
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

      <div>
        <p>
          <span className="font-extrabold">Top level domain:</span>{' '}
          {data.tld.join(', ')}
        </p>
        <p>
          <span className="font-extrabold">Currencies:</span>{' '}
          {(Object.values(data.currencies) as any)
            .map((el: any) => el.name)
            .join(', ')}
        </p>
        <p>
          <span className="font-extrabold">Languages:</span>{' '}
          {(Object.values(data.languages) as any)
            .map((el: string) => el)
            .join(', ')}
        </p>
      </div>
    </div>
  );
}
