import { useEffect, useState } from 'react';

import { PathType } from '@Types';
import { getCountry } from '@helpers/getCountries';
import CurrentCountryProfile from './CurrentCountryProfile';
import Spinner from '@components/Spinner/Spinner';

export default function CurrentCountry({ path }: PathType) {
  const [data, setData] = useState();

  useEffect(() => {
    getCountry(path).then(setData);
  }, []);

  return <>{data ? <CurrentCountryProfile data={data[0]} /> : <Spinner />}</>;
}
