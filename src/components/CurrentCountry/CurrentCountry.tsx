import { PathType } from '@Types';
import { getCountry } from '@helpers/getCountries';
import CurrentCountryProfile from './CurrentCountryProfile';

export default async function CurrentCountry({ path }: PathType) {
  const data = await getCountry(path);

  return <CurrentCountryProfile data={data[0]} />;
}
