import { useEffect, useState } from 'react';

import { getCountriesByCodes } from '@helpers/getCountries';
import { BorderCountriesBtnsRes, BorderCountriesBtnsType } from '@Types';
import ShowSpinner from '@components/ShowSpinner/ShowSpinner';
import BorderCountriesBtnsList from '@components/BorderCountriesBtnsList/BorderCountriesBtnsList';

export default function BorderCountriesBtns({
  countries,
}: BorderCountriesBtnsType) {
  const [data, setData] = useState<BorderCountriesBtnsRes[]>();

  useEffect(() => {
    getCountriesByCodes(countries.join(',')).then(setData);
  }, []);

  return (
    <div className="mt-16 lg:block cust-grid gap-6">
      <p className="font-extrabold sidebar lg:pt-0 lg:mb-4 pt-3">
        Border Countries:
      </p>
      <ShowSpinner show={!data}>
        <BorderCountriesBtnsList data={data!} />
      </ShowSpinner>
    </div>
  );
}
