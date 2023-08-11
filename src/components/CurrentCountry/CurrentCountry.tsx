import { useEffect, useState } from 'react';

import { PathType } from '@Types';
import { getCountry } from '@helpers/getCountries';
import CurrentCountryProfile from './CurrentCountryProfile';
import ShowSpinner from '@components/ShowSpinner/ShowSpinner';

export default function CurrentCountry({ path }: PathType) {
  const [data, setData] = useState();

  useEffect(() => {
    getCountry(path).then(el => setData(el[0]));
  }, []);

  return (
    <ShowSpinner show={!data}>
      <CurrentCountryProfile data={data} />
    </ShowSpinner>
  );
}
