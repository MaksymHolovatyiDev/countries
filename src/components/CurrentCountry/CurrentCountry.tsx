import { PathType } from '@Types';
import { getCountry } from '@helpers/getCountries';

export default async function CurrentCountryProfile({ path }: PathType) {
  const data = await getCountry(path);
  console.log(data);
  return <div>{data.name.common}</div>;
}
