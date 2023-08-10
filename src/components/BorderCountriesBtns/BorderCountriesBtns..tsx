import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getCountriesByCodes } from '@helpers/getCountries';
import { BorderCountriesBtnsType } from '@Types';
import Spinner from '@components/Spinner/Spinner';

export default function BorderCountriesBtns({
  countries,
}: BorderCountriesBtnsType) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getCountriesByCodes(countries.join(',')).then(setData);
  }, []);

  return (
    <div className="mt-16 lg:block cust-grid gap-6">
      <p className="font-extrabold sidebar lg:pt-0 lg:mb-4 pt-3">
        Border Countries:
      </p>
      {data ? (
        <ul className="grid gtc gap-8 items-center content">
          {data.map((el: any) => (
            <li key={el.name.official}>
              <Link
                href={`/${el.name.official}`}
                className="h-12 shadow-lg rounded flex flex-wrap justify-center items-center hover:bg-gray-200 focus:bg-gray-20 transition dark:bg-dark-blue dark:hover:bg-black dark:focus:bg-black"
              >
                <span className="text-center">{el.name.common}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
